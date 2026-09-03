"use client";

import { useActionState } from "react";
import { joinWaitlist, type WaitlistState } from "@/lib/waitlist";

export function WaitlistForm({ source }: { source: "hero" | "close" }) {
  const [state, action, pending] = useActionState<WaitlistState, FormData>(
    joinWaitlist,
    null,
  );

  if (state?.ok) {
    return (
      <p className="font-serif text-[1.05rem] leading-snug text-ink italic">
        {state.message}
      </p>
    );
  }

  return (
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
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-2">
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
          disabled={pending}
          className="h-12 min-h-12 w-full flex-1 border border-rule bg-field-2/60 px-4 font-ui text-base text-ink placeholder:italic disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={pending}
          className="h-12 min-h-12 shrink-0 bg-paper px-5 font-ui text-[0.8rem] font-medium tracking-[0.04em] text-field transition-colors hover:bg-signal disabled:opacity-60 sm:px-6"
        >
          Ask for a place
        </button>
      </div>
      <label
        htmlFor={`consent-${source}`}
        className="mt-3 flex max-w-md cursor-pointer items-start gap-2.5 font-serif text-[0.9rem] leading-snug text-quiet"
      >
        <input
          id={`consent-${source}`}
          name="consent"
          type="checkbox"
          value="yes"
          required
          disabled={pending}
          className="mt-[0.2em] size-4 shrink-0 cursor-pointer accent-signal disabled:opacity-60"
        />
        <span>
          I allow email about the explore.yoga teacher training.
        </span>
      </label>
      {state && !state.ok ? (
        <p className="mt-3 font-ui text-sm text-signal" role="alert">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
