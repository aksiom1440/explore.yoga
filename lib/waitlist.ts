"use server";

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { headers } from "next/headers";

export type WaitlistState = {
  ok: boolean;
  message: string;
} | null;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const seen = new Map<string, number>();

function rateLimited(ip: string) {
  const now = Date.now();
  const last = seen.get(ip) ?? 0;
  if (now - last < 4000) return true;
  seen.set(ip, now);
  return false;
}

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

async function deliver(email: string, source: string) {
  const jobs: Promise<unknown>[] = [];
  const webhook = process.env.WAITLIST_WEBHOOK_URL;
  const kitKey = process.env.KIT_API_KEY;
  const kitForm = process.env.KIT_FORM_ID;
  const ckKey = process.env.CONVERTKIT_API_KEY;
  const ckForm = process.env.CONVERTKIT_FORM_ID;
  const resend = process.env.RESEND_API_KEY;
  const notify = process.env.WAITLIST_NOTIFY_EMAIL;

  if (webhook) {
    jobs.push(postJson(webhook, { email, source, list: "explore.yoga" }));
  }

  if (kitKey && kitForm) {
    jobs.push(
      postJson(
        `https://api.kit.com/v4/forms/${kitForm}/subscribers`,
        { email_address: email },
        { "X-Kit-Api-Key": kitKey },
      ),
    );
  }

  if (ckKey && ckForm) {
    jobs.push(
      postJson(`https://api.convertkit.com/v3/forms/${ckForm}/subscribe`, {
        api_key: ckKey,
        email,
      }),
    );
  }

  if (resend && notify) {
    jobs.push(
      postJson(
        "https://api.resend.com/emails",
        {
          from: "explore.yoga <waitlist@explore.yoga>",
          to: [notify],
          subject: "Waiting list",
          text: `${email}\n${source}`,
        },
        { Authorization: `Bearer ${resend}` },
      ),
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
    `${JSON.stringify({ email, source, at: new Date().toISOString() })}\n`,
  );
}

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  if (String(formData.get("website") ?? "")) {
    return { ok: true, message: "You're on the list." };
  }

  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const source = String(formData.get("source") ?? "unknown");

  if (!EMAIL.test(email)) {
    return { ok: false, message: "That doesn't look like an email address." };
  }

  const ip =
    (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "local";
  if (rateLimited(ip)) {
    return { ok: false, message: "Wait a moment, then try once more." };
  }

  try {
    await deliver(email, source);
    return { ok: true, message: "You're on the list." };
  } catch {
    return { ok: false, message: "Couldn't reach the list. Try again." };
  }
}
