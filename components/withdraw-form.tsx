"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { withdraw, type WithdrawalState } from "@/lib/withdrawal";
import { PROGRAM_NAME } from "@/lib/intake";

const field =
  "h-12 min-h-12 w-full border border-rule bg-field-2/60 px-4 font-ui text-base text-ink placeholder:italic";
const button =
  "h-12 min-h-12 bg-paper px-5 font-ui text-[0.8rem] font-medium tracking-[0.04em] text-field transition-colors hover:bg-signal disabled:opacity-60 sm:px-6";
const quietButton =
  "font-ui text-[0.8rem] tracking-[0.01em] text-quiet underline decoration-rule underline-offset-4 transition-colors hover:text-ink";

function when(iso: string) {
  return `${new Date(iso).toLocaleString("en-GB", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "UTC",
  })} UTC`;
}

export function WithdrawForm() {
  const [step, setStep] = useState<"fill" | "confirm">("fill");
  const [values, setValues] = useState({ name: "", email: "", reference: "" });
  const [problem, setProblem] = useState("");
  const [state, action, pending] = useActionState<WithdrawalState, FormData>(
    withdraw,
    null,
  );
  const focusTarget = useRef<HTMLDivElement>(null);
  const done = state?.ok ? state : null;
  const view = done ? "done" : step;
  const lastView = useRef(view);

  useEffect(() => {
    // Leave focus alone on first load; follow the reader between steps.
    if (lastView.current !== view) focusTarget.current?.focus();
    lastView.current = view;
  }, [view]);

  if (done) {
    return (
      <div ref={focusTarget} tabIndex={-1} className="max-w-md outline-none">
        <p className="font-serif text-[1.3rem] leading-snug text-ink italic">
          Your withdrawal reached me.
        </p>
        <div className="mt-4 space-y-2 font-serif text-[1rem] leading-relaxed text-quiet">
          <p>Received {when(done.at)}.</p>
          <p>
            A confirmation is on its way to{" "}
            <span className="break-all text-ink">{done.email}</span>.
          </p>
          <p>
            I refund what is due to you within 14 days, to the card you paid
            with.
          </p>
        </div>
      </div>
    );
  }

  if (step === "confirm") {
    return (
      <div ref={focusTarget} tabIndex={-1} className="max-w-md outline-none">
        <p className="font-serif text-[1.15rem] leading-snug text-ink">
          Check, then confirm.
        </p>
        <dl className="mt-5 space-y-3 font-ui text-[0.95rem]">
          <div>
            <dt className="text-quiet">Contract</dt>
            <dd className="text-ink">{PROGRAM_NAME}</dd>
          </div>
          <div>
            <dt className="text-quiet">Name</dt>
            <dd className="text-ink">{values.name}</dd>
          </div>
          <div>
            <dt className="text-quiet">Confirmation goes to</dt>
            <dd className="break-all text-ink">{values.email}</dd>
          </div>
          {values.reference ? (
            <div>
              <dt className="text-quiet">Payment date or receipt</dt>
              <dd className="text-ink">{values.reference}</dd>
            </div>
          ) : null}
        </dl>
        <form action={action} className="mt-8 flex flex-wrap items-center gap-5">
          <input type="hidden" name="name" value={values.name} />
          <input type="hidden" name="email" value={values.email} />
          <input type="hidden" name="reference" value={values.reference} />
          <button type="submit" disabled={pending} className={button}>
            Confirm withdrawal
          </button>
          <button
            type="button"
            disabled={pending}
            onClick={() => setStep("fill")}
            className={quietButton}
          >
            Back
          </button>
        </form>
        {state && !state.ok ? (
          <p className="mt-4 font-ui text-sm text-signal" role="alert">
            {state.message}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div ref={focusTarget} tabIndex={-1} className="outline-none">
      <form
        noValidate
        className="flex w-full max-w-xl flex-col gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          const name = values.name.trim();
          const email = values.email.trim();
          if (name.length < 2) return setProblem("Your name is needed.");
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return setProblem("That doesn't look like an email address.");
          }
          setProblem("");
          setValues({ name, email, reference: values.reference.trim() });
          setStep("confirm");
        }}
      >
        <label className="sr-only" htmlFor="withdraw-name">
          Name
        </label>
        <input
          id="withdraw-name"
          type="text"
          autoComplete="name"
          maxLength={80}
          placeholder="your name"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          className={field}
        />
        <label className="sr-only" htmlFor="withdraw-email">
          The email you paid with
        </label>
        <input
          id="withdraw-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="the email you paid with"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          className={field}
        />
        <label className="sr-only" htmlFor="withdraw-reference">
          Payment date or receipt number
        </label>
        <input
          id="withdraw-reference"
          type="text"
          maxLength={120}
          placeholder="payment date or receipt number, if you have it"
          value={values.reference}
          onChange={(e) => setValues({ ...values, reference: e.target.value })}
          className={field}
        />
        <div>
          <button type="submit" className={button}>
            Continue
          </button>
        </div>
        {problem ? (
          <p className="mt-1 font-ui text-sm text-signal" role="alert">
            {problem}
          </p>
        ) : null}
      </form>
    </div>
  );
}
