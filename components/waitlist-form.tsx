"use client";

import {
  useActionState,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import Link from "next/link";
import { NEWSLETTER_CONSENT, formNote } from "@/lib/intake";
import { joinWaitlist, type WaitlistState } from "@/lib/waitlist";

type Sent = Extract<WaitlistState, { ok: true }>;

const field =
  "w-full border border-rule bg-field-2/60 px-4 font-ui text-base text-ink placeholder:italic disabled:opacity-60";

// Once either form on the page has sent, both show the confirmation.
let lastSent: Sent | null = null;
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

async function send(prev: WaitlistState, formData: FormData) {
  const next = await joinWaitlist(prev, formData);
  if (next?.ok) {
    lastSent = next;
    listeners.forEach((listener) => listener());
  }
  return next;
}

export function WaitlistForm({
  source,
}: {
  source: "hero" | "close" | "books";
}) {
  const [state, action, pending] = useActionState<WaitlistState, FormData>(
    send,
    null,
  );
  const shared = useSyncExternalStore(
    subscribe,
    () => lastSent,
    () => null,
  );
  const [reopened, setReopened] = useState<Sent | null>(null);
  const thanks = useRef<HTMLDivElement>(null);
  const sent = shared !== reopened ? shared : null;
  const typed = state?.fields ?? reopened?.fields;

  useEffect(() => {
    // Only the form that was used takes focus.
    if (sent && sent === state) thanks.current?.focus();
  }, [sent, state]);

  if (sent) {
    const firstName = sent.fields.name.split(/\s+/)[0];
    return (
      <div ref={thanks} tabIndex={-1} className="max-w-md outline-none">
        <p className="font-serif text-[1.3rem] leading-snug text-ink italic">
          {firstName ? `Thank you, ${firstName}.` : "Thank you."} Your note
          reached me.
        </p>
        <div className="mt-4 space-y-2 font-serif text-[0.95rem] leading-relaxed text-quiet">
          <p>
            I will write to{" "}
            <span className="break-all text-ink">{sent.fields.email}</span> with
            how the training runs, the day and time of the live sessions, and
            the earliest date you can start.
          </p>
          <p>
            Nothing is reserved yet, and you owe nothing. You decide once you
            have read it.
          </p>
          <p>
            If my reply hasn&apos;t arrived within two days, look in your spam
            folder.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setReopened(sent)}
          className="mt-4 font-ui text-[0.78rem] tracking-[0.01em] text-quiet underline decoration-rule underline-offset-4 transition-colors hover:text-ink"
        >
          Wrong address? Send it again
        </button>
      </div>
    );
  }

  return (
    <>
      <form action={action} className="w-full" noValidate>
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        />
        <input type="hidden" name="source" value={source} />
        <div className="flex w-full flex-col gap-2">
          <label className="sr-only" htmlFor={`name-${source}`}>
            Name
          </label>
          <input
            id={`name-${source}`}
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={80}
            placeholder="your name"
            defaultValue={typed?.name}
            disabled={pending}
            className={`h-12 min-h-12 ${field}`}
          />
          <label className="sr-only" htmlFor={`email-${source}`}>
            Email
          </label>
          <input
            id={`email-${source}`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            placeholder="your email"
            defaultValue={typed?.email}
            autoFocus={reopened !== null}
            disabled={pending}
            className={`h-12 min-h-12 ${field}`}
          />
          <label className="sr-only" htmlFor={`background-${source}`}>
            About you
          </label>
          <textarea
            id={`background-${source}`}
            name="background"
            required
            rows={3}
            maxLength={2000}
            placeholder="what you've been teaching, or why you're writing"
            defaultValue={typed?.background}
            disabled={pending}
            className={`min-h-[5.5rem] resize-y py-3 ${field}`}
          />
          <label className="mt-1 flex cursor-pointer items-start gap-3 font-serif text-[0.95rem] leading-snug text-quiet">
            <input
              type="checkbox"
              name="newsletter"
              value="yes"
              defaultChecked={typed?.newsletter}
              disabled={pending}
              className="mt-[0.2em] h-4 w-4 shrink-0 accent-signal"
            />
            <span>{NEWSLETTER_CONSENT}</span>
          </label>
          <div>
            <button
              type="submit"
              disabled={pending}
              className="h-12 min-h-12 bg-paper px-5 font-ui text-[0.8rem] font-medium tracking-[0.04em] text-field transition-colors hover:bg-signal disabled:opacity-60 sm:px-6"
            >
              Ask for a place
            </button>
          </div>
        </div>
        {state && !state.ok ? (
          <p className="mt-3 font-ui text-sm text-signal" role="alert">
            {state.message}
          </p>
        ) : null}
      </form>
      <div className="mt-3 max-w-md space-y-2 font-serif text-[0.95rem] leading-relaxed text-quiet">
        {formNote.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <p>
          I use what you send to answer you about the training, and send
          letters only if you tick the box.{" "}
          <Link
            href="/privacy"
            className="underline decoration-rule underline-offset-4 transition-colors hover:text-ink"
          >
            Privacy
          </Link>
        </p>
      </div>
    </>
  );
}
