import type { ReactNode } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { SiteFooter } from "@/components/site-footer";
import { LEGAL_UPDATED } from "@/lib/company";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <main className="mx-auto w-full max-w-3xl px-5 pb-16 pt-[max(1.15rem,env(safe-area-inset-top))] sm:px-8 lg:px-12">
        <Link href="/" className="inline-block">
          <Logo />
        </Link>
        <h1 className="mt-14 font-serif text-[2rem] font-light leading-[1.12] tracking-[-0.025em] sm:mt-20 sm:text-[2.6rem]">
          {title}
        </h1>
        <p className="mt-3 font-ui text-[0.78rem] tracking-[0.01em] text-quiet">
          Last updated {LEGAL_UPDATED}
        </p>
        <div className="legal mt-10">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}
