"use client";

import { useActionState } from "react";
import { joinWaitlist, type WaitlistState } from "@/lib/waitlist";

const field =
  "w-full border border-rule bg-field-2/60 px-4 font-ui text-base text-ink placeholder:italic disabled:opacity-60";

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
          disabled={pending}
          className={`min-h-[5.5rem] resize-y py-3 ${field}`}
        />
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
  );
}
