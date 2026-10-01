import Link from "next/link";
import { COMPANY } from "@/lib/company";

const link =
  "text-quiet underline decoration-rule underline-offset-4 transition-colors hover:text-ink";

export function SiteFooter() {
  return (
    <footer className="px-5 pb-12 pt-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl space-y-3 font-ui text-[0.78rem] leading-relaxed tracking-[0.01em] text-quiet">
        <p>
          For personal guidance and initiation into the tradition:{" "}
          <a href="https://ancientscience.com" className={link}>
            ancientscience.com
          </a>
        </p>
        <p>
          {COMPANY.name} · Registry code {COMPANY.registryCode} · VAT{" "}
          {COMPANY.vatNumber} · {COMPANY.address} ·{" "}
          <a href={`mailto:${COMPANY.email}`} className={link}>
            {COMPANY.email}
          </a>{" "}
          · {COMPANY.phone}
        </p>
        <p className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/books" className={link}>
            Reading map
          </Link>
          <Link href="/terms" className={link}>
            Terms of sale
          </Link>
          <Link href="/privacy" className={link}>
            Privacy
          </Link>
          <Link href="/withdraw" className={link}>
            Withdraw from contract here
          </Link>
        </p>
      </div>
    </footer>
  );
}
