import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { WithdrawForm } from "@/components/withdraw-form";
import { PROGRAM_NAME } from "@/lib/intake";

export const metadata: Metadata = {
  title: "Withdraw from contract here",
  description: `Withdraw from ${PROGRAM_NAME} within 14 days of paying.`,
};

export default function Withdraw() {
  return (
    <LegalPage title="Withdraw from contract here">
      <p>
        If you have bought {PROGRAM_NAME}, you can withdraw within 14 days of
        paying, without giving a reason. Fill this in, check it, and confirm. A
        confirmation comes to your email.
      </p>
      <p>
        What happens to your payment is in the{" "}
        <Link href="/terms">terms of sale</Link>.
      </p>
      <div className="mt-10">
        <WithdrawForm />
      </div>
    </LegalPage>
  );
}
