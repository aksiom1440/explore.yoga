"use server";

import { headers } from "next/headers";
import {
  EMAIL,
  appendLocal,
  ghlConfigured,
  rateLimited,
  recordInGhl,
  splitName,
} from "@/lib/delivery";

type Fields = {
  name: string;
  email: string;
  background: string;
};

/** Fields go back to the form so it can show who it heard from, or refill itself after an error. */
export type WaitlistState =
  | { ok: true; fields: Fields }
  | { ok: false; message: string; fields: Fields }
  | null;

type Place = {
  email: string;
  name: string;
  background: string;
  source: string;
};

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
  const tags = ["explore.yoga waitlist", "explore.yoga place"];
  if (place.source === "hero" || place.source === "close") {
    tags.push(`waitlist-${place.source}`);
    tags.push(`place-${place.source}`);
  }
  // The contact is stored before the note; a missing note must not block the ask.
  await recordInGhl(
    place,
    tags,
    `Asked for a place (${place.source})\n\n${place.background}`,
  );
}

async function deliver(place: Place) {
  const jobs: Promise<unknown>[] = [];
  const webhook = process.env.WAITLIST_WEBHOOK_URL;
  const kitKey = process.env.KIT_API_KEY;
  const kitForm = process.env.KIT_FORM_ID;
  const ckKey = process.env.CONVERTKIT_API_KEY;
  const ckForm = process.env.CONVERTKIT_FORM_ID;
  if (ghlConfigured()) {
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

  await appendLocal("waitlist.jsonl", {
    ...place,
    intent: "place",
    at: new Date().toISOString(),
  });
}

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const name = String(formData.get("name") ?? "").trim();
  const background = String(formData.get("background") ?? "").trim();
  const source = String(formData.get("source") ?? "unknown");
  const fields = { name, email, background };

  if (String(formData.get("website") ?? "")) {
    return { ok: true, fields };
  }

  if (name.length < 2) {
    return { ok: false, message: "A name helps me write back.", fields };
  }

  if (!EMAIL.test(email)) {
    return {
      ok: false,
      message: "That doesn't look like an email address.",
      fields,
    };
  }

  if (background.length < 12) {
    return {
      ok: false,
      message: "A line about you, then I can write back.",
      fields,
    };
  }

  const ip =
    (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "local";
  if (rateLimited(ip)) {
    return {
      ok: false,
      message: "Wait a moment, then try once more.",
      fields,
    };
  }

  try {
    await deliver({ email, name, background, source });
    return { ok: true, fields };
  } catch {
    return { ok: false, message: "Couldn't send that. Try again.", fields };
  }
}
