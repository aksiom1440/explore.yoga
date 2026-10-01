"use server";

import { headers } from "next/headers";
import { COMPANY } from "@/lib/company";
import {
  EMAIL,
  appendLocal,
  ghlConfigured,
  rateLimited,
  recordInGhl,
} from "@/lib/delivery";
import { PROGRAM_NAME } from "@/lib/intake";

export type WithdrawalState =
  | { ok: true; at: string; email: string }
  | { ok: false; message: string }
  | null;

/**
 * The withdrawal function the consumer rules require: the confirm step lands here.
 * A GHL workflow on the "explore.yoga withdrawal" tag sends the acknowledgement email.
 */
export async function withdraw(
  _prev: WithdrawalState,
  formData: FormData,
): Promise<WithdrawalState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const reference = String(formData.get("reference") ?? "").trim();

  if (name.length < 2 || !EMAIL.test(email)) {
    return {
      ok: false,
      message: "Your name and the email you paid with are both needed.",
    };
  }

  const ip =
    (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "local";
  if (rateLimited(`withdraw:${ip}`)) {
    return { ok: false, message: "Wait a moment, then confirm once more." };
  }

  const at = new Date().toISOString();
  const note = [
    `Withdrawal from contract: ${PROGRAM_NAME}`,
    `Received: ${at}`,
    `Name: ${name}`,
    `Email for the confirmation: ${email}`,
    `Payment date or receipt: ${reference || "not given"}`,
  ].join("\n");

  try {
    if (ghlConfigured()) {
      const stored = await recordInGhl(
        { email, name },
        ["explore.yoga withdrawal"],
        note,
      );
      if (!stored) throw new Error("ghl note");
    } else {
      await appendLocal("withdrawals.jsonl", { name, email, reference, at });
    }
    return { ok: true, at, email };
  } catch {
    return {
      ok: false,
      message: `That didn't go through. Try again, or email your withdrawal to ${COMPANY.email}.`,
    };
  }
}
