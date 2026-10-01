import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { COMPANY } from "@/lib/company";
import { PROGRAM_NAME } from "@/lib/intake";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What explore.yoga collects, why, and for how long.",
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy">
      <h2>Who is responsible</h2>
      <p>
        {COMPANY.name}, registry code {COMPANY.registryCode},{" "}
        {COMPANY.address}. Email {COMPANY.email}. Miska Käppi answers every
        message himself.
      </p>

      <h2>What I collect, and why</h2>
      <ul>
        <li>
          <strong>When you ask for a place:</strong> your name, your email and
          the line you write about yourself. I use them to answer you about the
          training. Legal basis: steps you ask for before a contract (GDPR
          article 6(1)(b)).
        </li>
        <li>
          <strong>When you take a place:</strong> your name, your email and
          your payment. Stripe handles the card; I never see the card number.
          I use them to deliver the training and to keep the accounts. Legal
          basis: the contract, and accounting law (article 6(1)(b) and (c)).
        </li>
        <li>
          <strong>In live sessions:</strong> your image, voice and words, when
          they are recorded. The recordings are part of the training and are
          shared with its groups. Legal basis: the contract (article 6(1)(b)).
          You can keep your camera off and use only your first name.
        </li>
        <li>
          <strong>When you withdraw:</strong> your name, your email and the
          payment details you give. Legal basis: consumer law (article
          6(1)(c)).
        </li>
        <li>
          <strong>When you visit the site:</strong> the server sees your IP
          address. The form keeps it briefly in memory to stop repeated
          sending, and the host keeps short technical logs. The site uses no
          cookies and no analytics.
        </li>
      </ul>
      <p>
        I write to you only about {PROGRAM_NAME}, which you asked about. I do
        not add you to a newsletter.
      </p>

      <h2>Who else handles it</h2>
      <ul>
        <li>HighLevel (LeadConnector), USA: stores messages and sends email.</li>
        <li>Stripe: takes payments.</li>
        <li>Vercel, USA: hosts this site.</li>
        <li>
          The platform the training runs on, which I name in the email before
          you pay.
        </li>
      </ul>
      <p>
        Data sent to the USA is protected by the EU–US Data Privacy Framework
        or by the EU standard contractual clauses.
      </p>

      <h2>How long I keep it</h2>
      <ul>
        <li>
          A message that does not lead to a place: 12 months from our last
          exchange.
        </li>
        <li>
          Students: for the six months of the training. Accounting records:
          7 years, as Estonian law requires.
        </li>
        <li>
          Recordings of live sessions: as long as they are used in the
          training, and at most two years.
        </li>
        <li>Withdrawals: 3 years.</li>
      </ul>

      <h2>Your rights</h2>
      <p>
        You can ask to see your data, correct it, delete it, limit or object to
        its use, or receive it in a portable form. Write to {COMPANY.email}.
      </p>
      <p>
        You can also complain to the Estonian Data Protection Inspectorate
        (Andmekaitse Inspektsioon), at <a href="https://www.aki.ee">aki.ee</a>,
        or to the data protection authority where you live.
      </p>
    </LegalPage>
  );
}
