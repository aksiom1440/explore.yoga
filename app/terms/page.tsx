import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { COMPANY } from "@/lib/company";
import {
  ENROL_EUROS,
  INSTALMENT_TOTAL,
  MONTHLY_EUROS,
  MONTHS,
  PRICE_EUROS,
  PROGRAM_NAME,
  euros,
  word,
} from "@/lib/intake";

export const metadata: Metadata = {
  title: "Terms of sale",
  description: `The terms for buying ${PROGRAM_NAME} at explore.yoga.`,
};

export default function Terms() {
  return (
    <LegalPage title="Terms of sale">
      <h2>Who sells the training</h2>
      <p>
        {PROGRAM_NAME} is sold by {COMPANY.name}, registry code{" "}
        {COMPANY.registryCode}, VAT number {COMPANY.vatNumber},{" "}
        {COMPANY.address}. Email {COMPANY.email}, phone {COMPANY.phone}.
      </p>
      <p>
        Miska Käppi teaches it. In these terms, &ldquo;I&rdquo; means{" "}
        {COMPANY.name} and Miska Käppi.
      </p>

      <h2>What you buy</h2>
      <ul>
        <li>
          Six months of {PROGRAM_NAME}, online and in English, counted from the
          day your group starts.
        </li>
        <li>Twenty recorded lectures of two hours each, in two-week steps.</li>
        <li>Practice videos, from the first day.</li>
        <li>
          A live session every two weeks, one to two hours long, at a set day
          and time. Some are for your group alone; others bring several groups
          together. Every session is recorded.
        </li>
        <li>All the recordings, for the six months.</li>
        <li>
          My certificate, when you can pass the system on. It is not a Yoga
          Alliance certificate and does not lead to RYT status.
        </li>
      </ul>
      <p>
        You need an internet connection and a device that plays video. I tell
        you where the training takes place in the email I send before you pay.
      </p>

      <h2>Price and payment</h2>
      <ul>
        <li>{euros(PRICE_EUROS)} euros, paid at once, or</li>
        <li>
          {euros(INSTALMENT_TOTAL)} euros in {word(MONTHS + 1)} payments:{" "}
          {euros(ENROL_EUROS)} euros when you take your place, then{" "}
          {euros(MONTHLY_EUROS)} euros a month for {word(MONTHS)} months.
        </li>
      </ul>
      <p>
        Prices include VAT. You pay by card through a Stripe payment link I
        send you. Monthly payments are charged to the same card, and every one
        of them falls within your six months.
      </p>

      <h2>When the contract is made</h2>
      <p>
        When your payment goes through. Stripe sends you a receipt by email.
      </p>

      <h2>Your right to withdraw</h2>
      <p>
        You can withdraw within 14 days of the day the contract is made,
        without giving a reason.
      </p>
      <p>
        To withdraw, use{" "}
        <Link href="/withdraw">Withdraw from contract here</Link>, email me a
        clear statement, or send the model form below. It is enough that you
        send it within the 14 days.
      </p>
      <p>
        I refund everything you have paid within 14 days of receiving your
        withdrawal, to the card you paid with, at no cost to you.
      </p>
      <p>
        If your group starts within those 14 days, I ask you to confirm by
        email that you want to start before your withdrawal period ends. If you
        then withdraw, you pay for the part of the training you received up to
        that day, in proportion to the six months, and I refund the rest.
      </p>

      <h2>After the 14 days</h2>
      <p>
        Payments are not refunded after the withdrawal period. If you pay in{" "}
        {word(MONTHS + 1)} payments and stop, the remaining payments are still
        due. A missed live session is not refunded; every session is recorded.
      </p>

      <h2>When the six months end</h2>
      <p>
        Your training, recordings included, ends six months after the day your
        group starts.
      </p>

      <h2>Live sessions and recordings</h2>
      <p>
        Live sessions are recorded, and the recordings are shared with the
        groups in the training. You can keep your camera off and use only your
        first name. The recordings are for your own study during the training:
        do not download, copy or share them.
      </p>

      <h2>Your health</h2>
      <p>
        The practice includes asana and breath retention. Practise within your
        limits. If you are pregnant, or have high blood pressure, a heart
        condition or another condition that affects your practice, tell me
        before you start, and ask me before you hold the breath.
      </p>

      <h2>If something changes on my side</h2>
      <p>
        If I cannot hold a live session, I move it and tell you in advance. If
        I cannot deliver the training, I refund the part you have not
        received.
      </p>

      <h2>If something is wrong</h2>
      <p>
        If the training or its recordings are not as described here, you have
        the remedies consumer law gives you. Write to me first, at{" "}
        {COMPANY.email}. If we cannot agree, you can take the matter to the
        Estonian Consumer Disputes Committee (Tarbijavaidluste komisjon), at{" "}
        <a href="https://ttja.ee">ttja.ee</a>.
      </p>
      <p>
        Estonian law applies. You keep the protection of the mandatory
        consumer law of the country where you live.
      </p>

      <h2>Model withdrawal form</h2>
      <p>
        Complete and return this form only if you wish to withdraw from the
        contract.
      </p>
      <ul>
        <li>
          To: {COMPANY.name}, {COMPANY.address}, {COMPANY.email}
        </li>
        <li>
          I hereby give notice that I withdraw from my contract for the
          provision of the following service: {PROGRAM_NAME}
        </li>
        <li>Ordered on:</li>
        <li>Name of consumer:</li>
        <li>Address of consumer:</li>
        <li>Signature of consumer (only if this form is sent on paper):</li>
        <li>Date:</li>
      </ul>
    </LegalPage>
  );
}
