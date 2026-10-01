import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Fork, HubRow, Pill, Stem } from "@/components/reading-map";
import { SiteFooter } from "@/components/site-footer";
import { WaitlistForm } from "@/components/waitlist-form";
import { around, branches, doors, spine } from "@/lib/books";
import { PROGRAM_NAME, intakeLine, priceLine } from "@/lib/intake";

export const metadata: Metadata = {
  title: "So you want to learn tantra yoga?",
  description:
    "A reading map for tantra yoga: three ways in, then Woodroffe, mantra, Sanskrit, the shaiva tantras and the hatha texts, with a line on what each book is for.",
};

export default function BooksPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-6xl px-5 pt-[max(1.15rem,env(safe-area-inset-top))] sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="inline-block">
            <Logo />
          </Link>
          <a href="#place" className="font-ui text-[0.8rem] font-medium tracking-[0.04em] text-signal underline decoration-rule underline-offset-4 transition-colors hover:text-ink">
            Ask for a place
          </a>
        </div>

        <header className="mx-auto max-w-2xl pb-12 pt-14 text-center sm:pb-16 sm:pt-20">
          <h1 className="font-serif text-[2.05rem] font-light leading-[1.12] tracking-[-0.028em] sm:text-5xl sm:leading-[1.08]">
            So you want to learn tantra yoga?
          </h1>
          <div className="mt-8 space-y-4 text-[1.08rem] font-light leading-[1.6] text-ink/90 sm:text-[1.15rem]">
            <p className="prose-line">
              Start at the door that fits you. All three lead to tantra, and
              from there to the texts themselves.
            </p>
            <p className="prose-line">
              None of these books is required for the training. They are what
              I hand people who ask where to begin.
            </p>
          </div>
        </header>

        <div className="flex flex-col items-center">
          <Pill as="h2">Start here</Pill>
          <Stem />
          <Fork chains={doors} merge between="or" />
          {spine.map((hub) => (
            <HubRow key={hub.book.title} hub={hub} />
          ))}
          <Stem />
          <Fork chains={branches} />
        </div>

        <div className="mt-24 flex flex-col items-center border-t border-rule pt-16 sm:mt-32 sm:pt-20">
          <Pill as="h2">Around the path</Pill>
          <p className="mt-3 max-w-md text-center text-[1rem] leading-snug text-quiet">
            Body, history, myth and mind: the reading that sits beside the
            tradition.
          </p>
          <Stem />
          <Fork chains={around} />
        </div>

        <section className="mx-auto max-w-3xl border-t border-rule py-16 sm:mt-12 sm:py-28">
          <p className="prose-line measure text-[1.12rem] font-light leading-[1.6] sm:text-[1.22rem]">
            In the training I tell you which sentences are the tradition&apos;s,
            which come from research, and which are mine. Ask me for the
            source. That is my job.
          </p>
          <p className="prose-line measure mt-10 text-[1.35rem] font-light leading-[1.45] tracking-[-0.02em] sm:text-[1.7rem] sm:leading-[1.35]">
            {PROGRAM_NAME}
          </p>
          <p className="prose-line measure mt-4 text-[1.12rem] font-light leading-[1.6] sm:text-[1.22rem]">
            {intakeLine()}
          </p>
          <p className="prose-line measure mt-4 text-[1.12rem] font-light leading-[1.6] sm:text-[1.22rem]">
            {priceLine()}
          </p>
          <p className="measure mt-4 font-ui text-[0.85rem] tracking-[0.01em]">
            <Link
              href="/"
              className="text-quiet underline decoration-rule underline-offset-4 transition-colors hover:text-ink"
            >
              How the training runs
            </Link>
          </p>
          <div id="place" className="mt-10 max-w-xl scroll-mt-8">
            <WaitlistForm source="books" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
