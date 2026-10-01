import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { SiteFooter } from "@/components/site-footer";
import { WaitlistForm } from "@/components/waitlist-form";
import { around, branches, doors, path, type Shelf } from "@/lib/books";
import { PROGRAM_NAME, intakeLine, priceLine } from "@/lib/intake";

export const metadata: Metadata = {
  title: "So you want to learn tantra yoga?",
  description:
    "A reading map for tantra yoga: three ways in, then Woodroffe, mantra, Sanskrit, the shaiva tantras and the hatha texts, with a line on what each book is for.",
};

const h2 =
  "font-serif text-[1.65rem] font-light tracking-[-0.02em] sm:text-3xl";

function Books({ shelf }: { shelf: Shelf }) {
  return (
    <ul className="mt-8 space-y-8">
      {shelf.books.map((book) => (
        <li key={book.title} className="measure">
          <cite className="block text-[1.15rem] leading-snug tracking-[-0.01em] text-ink">
            {book.title}
          </cite>
          <p className="mt-1 font-ui text-[0.8rem] tracking-[0.01em] text-quiet">
            {book.author}
            {book.bonus ? (
              <span className="text-signal"> · Bonus round</span>
            ) : null}
          </p>
          <p className="mt-2 text-[1.05rem] font-light leading-[1.55] text-ink/90">
            {book.note}
          </p>
        </li>
      ))}
    </ul>
  );
}

function ShelfSection({ shelf, level = 2 }: { shelf: Shelf; level?: 2 | 3 }) {
  const Heading = level === 2 ? "h2" : "h3";
  return (
    <section
      id={shelf.id}
      className={
        level === 2
          ? "scroll-mt-8 border-t border-rule py-14 sm:py-20"
          : "scroll-mt-8 pt-12 sm:pt-16"
      }
    >
      <Heading
        className={
          level === 2
            ? h2
            : "text-[1.3rem] font-medium tracking-[-0.015em] sm:text-[1.45rem]"
        }
      >
        {shelf.heading}
      </Heading>
      {shelf.lead ? (
        <p className="measure mt-4 text-[1.08rem] font-light leading-[1.6] text-ink/90">
          {shelf.lead}
        </p>
      ) : null}
      <Books shelf={shelf} />
    </section>
  );
}

export default function BooksPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-3xl px-5 pt-[max(1.15rem,env(safe-area-inset-top))] sm:px-8 lg:px-12">
        <Link href="/" className="inline-block">
          <Logo />
        </Link>

        <header className="pb-14 pt-14 sm:pb-20 sm:pt-20">
          <h1 className="max-w-[20ch] font-serif text-[2.05rem] font-light leading-[1.12] tracking-[-0.028em] sm:text-5xl sm:leading-[1.08]">
            So you want to learn tantra yoga?
          </h1>
          <div className="mt-8 space-y-5 text-[1.12rem] font-light leading-[1.6] sm:text-[1.22rem]">
            <p className="measure">
              Start at the door that fits you. All three lead to tantra, and
              from there to the texts themselves.
            </p>
            <p className="measure">
              None of these books is required for the training. They are what
              I hand people who ask where to begin.
            </p>
          </div>
          <nav
            aria-label="Three ways in"
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 font-ui text-[0.85rem] tracking-[0.01em]"
          >
            {doors.map((door) => (
              <a
                key={door.id}
                href={`#${door.id}`}
                className="text-signal underline decoration-rule underline-offset-4 transition-colors hover:text-ink"
              >
                {door.heading}
              </a>
            ))}
          </nav>
        </header>

        <section className="border-t border-rule py-14 sm:py-20">
          <h2 className={h2}>Start here</h2>
          {doors.map((door) => (
            <ShelfSection key={door.id} shelf={door} level={3} />
          ))}
        </section>

        {path.map((shelf) => (
          <ShelfSection key={shelf.id} shelf={shelf} />
        ))}

        <section className="border-t border-rule py-14 sm:py-20">
          <h2 className={h2}>From here, the path branches</h2>
          {branches.map((shelf) => (
            <ShelfSection key={shelf.id} shelf={shelf} level={3} />
          ))}
        </section>

        <section className="border-t border-rule py-14 sm:py-20">
          <h2 className={h2}>Around the path</h2>
          {around.map((shelf) => (
            <ShelfSection key={shelf.id} shelf={shelf} level={3} />
          ))}
        </section>

        <section className="border-t border-rule py-16 sm:py-28">
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
          <div className="mt-10 max-w-xl">
            <WaitlistForm source="books" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
