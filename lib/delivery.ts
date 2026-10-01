import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

export const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const seen = new Map<string, number>();

export function rateLimited(key: string) {
  const now = Date.now();
  const last = seen.get(key) ?? 0;
  if (now - last < 4000) return true;
  seen.set(key, now);
  return false;
}

export function splitName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] ?? "",
    lastName: parts.slice(1).join(" "),
  };
}

const GHL_VERSION = "2021-07-28";

function ghl() {
  const token = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) return null;
  return {
    locationId,
    headers: {
      Authorization: `Bearer ${token}`,
      Version: GHL_VERSION,
      "Content-Type": "application/json",
      "Location-Id": locationId,
    },
  };
}

export function ghlConfigured() {
  return ghl() !== null;
}

/** Upserts the contact, tags it and adds a note. Returns whether the note was stored. */
export async function recordInGhl(
  contact: { email: string; name: string },
  tags: string[],
  note: string,
): Promise<boolean> {
  const api = ghl();
  if (!api) throw new Error("ghl not configured");

  const { firstName, lastName } = splitName(contact.name);

  const upsertRes = await fetch(
    "https://services.leadconnectorhq.com/contacts/upsert",
    {
      method: "POST",
      headers: api.headers,
      body: JSON.stringify({
        locationId: api.locationId,
        email: contact.email,
        name: contact.name,
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

  const tagRes = await fetch(
    `https://services.leadconnectorhq.com/contacts/${id}/tags`,
    {
      method: "POST",
      headers: api.headers,
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
      headers: api.headers,
      body: JSON.stringify({ body: note }),
    },
  );
  return noteRes.ok;
}

/** Last resort when no integration is set: one JSON line per record. */
export async function appendLocal(file: string, record: object) {
  const dir = process.env.VERCEL
    ? "/tmp/explore-yoga"
    : path.join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
  await appendFile(path.join(dir, file), `${JSON.stringify(record)}\n`);
}
