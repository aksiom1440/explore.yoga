"use server";

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { headers } from "next/headers";
import { formSuccess } from "@/lib/intake";

export type WaitlistState = {
  ok: boolean;
  message: string;
} | null;

type Place = {
  email: string;
  name: string;
  background: string;
  source: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const seen = new Map<string, number>();

function rateLimited(ip: string) {
  const now = Date.now();
  const last = seen.get(ip) ?? 0;
  if (now - last < 4000) return true;
  seen.set(ip, now);
  return false;
}

function splitName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] ?? "",
    lastName: parts.slice(1).join(" "),
  };
}

const GHL_VERSION = "2021-07-28";

async function postJson(url: string, body: unknown, extra?: HeadersInit) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json", ...extra },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(`upstream ${res.status}`);
  }
}

async function deliverGhl(place: Place) {
  const token = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) return;

  const headers = {
    Authorization: `Bearer ${token}`,
    Version: GHL_VERSION,
    "Content-Type": "application/json",
    "Location-Id": locationId,
  };

  const { firstName, lastName } = splitName(place.name);

  const upsertRes = await fetch(
    "https://services.leadconnectorhq.com/contacts/upsert",
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        locationId,
        email: place.email,
        name: place.name,
        firstName,
        lastName: lastName || undefined,
        source: "explore.yoga",
      }),
    },
  );
  if (!upsertRes.ok) {
    throw new Error(`ghl upsert ${upsertRes.status}`);
  }

  const data = (await upsertRes.json()) as { contact?: { id?: string } };
  const id = data.contact?.id;
  if (!id) {
    throw new Error("ghl upsert missing id");
  }

  const tags = ["explore.yoga waitlist", "explore.yoga place"];
  if (place.source === "hero" || place.source === "close") {
    tags.push(`waitlist-${place.source}`);
    tags.push(`place-${place.source}`);
  }

  const tagRes = await fetch(
    `https://services.leadconnectorhq.com/contacts/${id}/tags`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({ tags }),
    },
  );
  if (!tagRes.ok) {
    throw new Error(`ghl tags ${tagRes.status}`);
  }

  const noteRes = await fetch(
    `https://services.leadconnectorhq.com/contacts/${id}/notes`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        body: `Asked for a place (${place.source})\n\n${place.background}`,
      }),
    },
  );
  if (!noteRes.ok) {
    // Contact is already stored; a missing note must not block the ask.
  }
}

async function deliver(place: Place) {
  const jobs: Promise<unknown>[] = [];
  const webhook = process.env.WAITLIST_WEBHOOK_URL;
  const kitKey = process.env.KIT_API_KEY;
  const kitForm = process.env.KIT_FORM_ID;
  const ckKey = process.env.CONVERTKIT_API_KEY;
  const ckForm = process.env.CONVERTKIT_FORM_ID;
  const ghlKey = process.env.GHL_API_KEY;
  const ghlLocation = process.env.GHL_LOCATION_ID;

  if (ghlKey && ghlLocation) {
    jobs.push(deliverGhl(place));
  }

  if (webhook) {
    jobs.push(
      postJson(webhook, {
        email: place.email,
        name: place.name,
        background: place.background,
        source: place.source,
        list: "explore.yoga",
        intent: "place",
      }),
    );
  }

  if (kitKey && kitForm) {
    jobs.push(
      postJson(
        `https://api.kit.com/v4/forms/${kitForm}/subscribers`,
        {
          email_address: place.email,
          first_name: splitName(place.name).firstName,
        },
        { "X-Kit-Api-Key": kitKey },
      ),
    );
  }

  if (ckKey && ckForm) {
    jobs.push(
      postJson(`https://api.convertkit.com/v3/forms/${ckForm}/subscribe`, {
        api_key: ckKey,
        email: place.email,
        first_name: splitName(place.name).firstName,
      }),
    );
  }

  if (jobs.length > 0) {
    await Promise.all(jobs);
    return;
  }

  const dir = process.env.VERCEL
    ? "/tmp/explore-yoga"
    : path.join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
  await appendFile(
    path.join(dir, "waitlist.jsonl"),
    `${JSON.stringify({ ...place, intent: "place", at: new Date().toISOString() })}\n`,
  );
}

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  if (String(formData.get("website") ?? "")) {
    return {
      ok: true,
      message: formSuccess,
    };
  }

  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const name = String(formData.get("name") ?? "").trim();
  const background = String(formData.get("background") ?? "").trim();
  const source = String(formData.get("source") ?? "unknown");

  if (name.length < 2) {
    return { ok: false, message: "A name helps me write back." };
  }

  if (!EMAIL.test(email)) {
    return { ok: false, message: "That doesn't look like an email address." };
  }

  if (background.length < 12) {
    return {
      ok: false,
      message: "A line about you, then I can write back.",
    };
  }

  const ip =
    (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "local";
  if (rateLimited(ip)) {
    return { ok: false, message: "Wait a moment, then try once more." };
  }

  try {
    await deliver({ email, name, background, source });
    return {
      ok: true,
      message: formSuccess,
    };
  } catch {
    return { ok: false, message: "Couldn't send that. Try again." };
  }
}
