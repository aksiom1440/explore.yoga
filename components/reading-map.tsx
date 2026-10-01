import { Fragment, type CSSProperties, type ReactNode } from "react";
import type { Book, Chain, Hub } from "@/lib/books";

function tone(color: string) {
  return { "--tone": color } as CSSProperties;
}

function Line({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`w-px bg-quiet/50 ${className}`} />;
}

function HeadDown({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-quiet/80 ${className}`}
    />
  );
}

/** A vertical arrow. The label sits in the arrow, the way the drawn map has it. */
export function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center">
      <Line className="h-5" />
      {label ? (
        <p className="max-w-[17rem] px-2 py-1.5 text-center font-serif text-[0.98rem] italic leading-snug text-signal">
          {label}
        </p>
      ) : null}
      <Line className={label ? "h-3" : "h-2"} />
      <HeadDown />
    </div>
  );
}

export function Pill({
  children,
  as: Tag = "p",
}: {
  children: ReactNode;
  as?: "h2" | "h3" | "p";
}) {
  return (
    <Tag className="rounded-full border border-signal/50 px-4 py-1.5 text-center font-ui text-[0.8rem] font-medium tracking-[0.05em] text-signal">
      {children}
    </Tag>
  );
}

export function BookCard({ book }: { book: Book }) {
  return (
    <div className="mt-2 flex w-full max-w-[16rem] flex-col items-center">
      {book.note ? (
        <p className="mb-2.5 text-center text-[0.95rem] leading-snug text-ink/85">
          {book.note}
        </p>
      ) : null}
      <article className="w-full border border-rule bg-field-2">
        <div
          aria-hidden="true"
          className="h-1.5"
          style={{ background: "var(--tone)" }}
        />
        <div className="px-4 pb-3.5 pt-3">
          <cite className="block font-serif text-[1.02rem] leading-snug text-ink">
            {book.title}
          </cite>
          <p className="mt-1.5 font-ui text-[0.72rem] leading-snug tracking-[0.01em] text-quiet">
            {book.author}
          </p>
        </div>
      </article>
    </div>
  );
}

function ChainColumn({ chain, merge }: { chain: Chain; merge: boolean }) {
  return (
    <section
      className="flex flex-1 flex-col items-center"
      style={tone(chain.tone)}
    >
      <Pill as="h3">{chain.label}</Pill>
      {chain.lead ? (
        <p className="mt-2 max-w-[16rem] text-center text-[0.9rem] leading-snug text-quiet">
          {chain.lead}
        </p>
      ) : null}
      {chain.books.map((book) => (
        <Fragment key={book.title}>
          <Arrow label={book.via} />
          <BookCard book={book} />
        </Fragment>
      ))}
      {merge ? <Line className="mt-4 hidden min-h-8 flex-1 md:block" /> : null}
    </section>
  );
}

/**
 * Parallel chains. From `md` (three columns) or `lg` (four) up, a bar joins
 * the column centres at the top, and with `merge` at the bottom too.
 * Columns carry their own padding instead of a gap so the bar ends land on
 * the centres exactly.
 */
export function Fork({
  chains,
  merge = false,
  between,
}: {
  chains: Chain[];
  merge?: boolean;
  between?: string;
}) {
  const four = chains.length === 4;
  const show = four ? "lg:block" : "md:block";
  const inset = `calc(50% / ${chains.length})`;
  return (
    <div className="relative w-full">
      <div
        aria-hidden="true"
        className={`absolute top-0 hidden h-px bg-quiet/50 ${show}`}
        style={{ left: inset, right: inset }}
      />
      <div
        className={`grid gap-y-14 ${four ? "lg:grid-cols-4" : "md:grid-cols-3"}`}
      >
        {chains.map((chain, i) => (
          <div key={chain.label} className="flex flex-col items-center px-3">
            {between && i > 0 ? (
              <p
                className={`mb-4 font-serif text-[0.95rem] italic text-quiet ${four ? "lg:hidden" : "md:hidden"}`}
              >
                {between}
              </p>
            ) : null}
            <div className={`hidden flex-col items-center ${four ? "lg:flex" : "md:flex"}`}>
              <Line className="h-5" />
              <HeadDown className="mb-2" />
            </div>
            <ChainColumn chain={chain} merge={merge} />
          </div>
        ))}
      </div>
      {merge ? (
        <div
          aria-hidden="true"
          className={`absolute bottom-0 hidden h-px bg-quiet/50 ${show}`}
          style={{ left: inset, right: inset }}
        />
      ) : null}
    </div>
  );
}

function SideRoad({ book }: { book: Book }) {
  return (
    <div className="flex w-full flex-col items-center md:flex-row md:items-center">
      <div className="md:hidden">
        <Arrow label={book.via} />
      </div>
      <div
        aria-hidden="true"
        className="hidden shrink-0 items-center md:flex"
      >
        <span className="h-px w-8 bg-quiet/50" />
        <span className="h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-quiet/80" />
      </div>
      <div className="flex w-full max-w-[16rem] flex-col items-center md:ml-3">
        {book.via ? (
          <p className="hidden text-center font-serif text-[0.98rem] italic leading-snug text-signal md:block">
            {book.via}
          </p>
        ) : null}
        <BookCard book={book} />
      </div>
    </div>
  );
}

/** A book on the spine, with its side roads to the right (below, on a phone). */
export function HubRow({ hub }: { hub: Hub }) {
  return (
    <section className="flex w-full flex-col items-center" style={tone(hub.tone)}>
      <Arrow label={hub.via} />
      <div className="grid w-full md:grid-cols-[1fr_16rem_1fr]">
        <div className="hidden md:block" />
        <div className="flex flex-col items-center">
          <BookCard book={hub.book} />
          <Line className="hidden min-h-6 flex-1 md:block" />
        </div>
        <div className="mx-auto mt-6 flex w-full max-w-[18rem] flex-col items-center gap-6 border border-dashed border-rule px-4 pb-6 pt-4 md:mx-0 md:mt-0 md:max-w-none md:items-start md:gap-8 md:border-y-0 md:border-r-0 md:border-solid md:border-quiet/50 md:px-0 md:pb-2 md:pt-8">
          <p className="font-ui text-[0.72rem] uppercase tracking-[0.12em] text-quiet md:hidden">
            Side roads
          </p>
          {hub.sides.map((side) => (
            <SideRoad key={side.title} book={side} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stem() {
  return <Line className="h-8" />;
}
