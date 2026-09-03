import Image from "next/image";
import { WaitlistForm } from "@/components/waitlist-form";
import { formingLine } from "@/lib/intake";

function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="explore.yoga"
      width={807}
      height={124}
      priority
      className="h-7 w-auto sm:h-8"
    />
  );
}

function Rule() {
  return <div className="rule" aria-hidden="true" />;
}

const curriculum = [
  "The worldview the practice assumes — and why asana stops making sense without it",
  "Yoga's history: pre-modern and modern, and the exact point where the two separate",
  "Tantra — where it actually comes from, and how its reputation got made",
  "Prana: the nadis, the vayus, the diaphragm system",
  "Asana anatomy from the cell upward — connective tissue, tensegrity, the joint's own sense organs",
  "Ayurveda: the elements, the three doshas, and the sequence built out of them",
  "The eight limbs — and why Patanjali is not the best place to begin",
  "Surya namaskara, phase by phase, with the twelve mantras",
  "Teaching: how a room gets built, and why you correct far less than you were taught to",
  "Asana, pranayama, bandha, mantra and meditation, as one system",
];

const learn = [
  {
    lead: "To read mind and body as one system.",
    body: "Connective tissue is continuous. So is the argument about it. You stop treating a hip as a hip.",
  },
  {
    lead: "How to build an asana sequence from the ancient principles.",
    body: "You build the sequence from the same principles the tradition uses for everything else.",
  },
  {
    lead: "How to teach this to someone who came for a better backbend.",
    body: "Most won't ask you for prana. They can still feel that you help them in a way other teachers don't.",
  },
  {
    lead: "How to hold a class that closes the conscious mind.",
    body: "The thinking mind will run the room if you let it. You learn to build conditions where it stands down, so the student can change what sits underneath.",
  },
  {
    lead: "To know twenty times more than you say.",
    body: "Even if you teach only asana, they can feel what you know and did not say.",
  },
];

const comeIf = [
  "you've taught for years and can still let a new model in",
  "you're not planning to teach, which is how some of the best teachers I trained arrived",
  "you want the system around asana, not more asana",
  "you're willing to take the worldview with the practice",
  "you're scientifically minded, and you can still let the spiritual in",
  "you're spiritually minded, and you can still let the science in",
];

export default function Home() {
  return (
    <>
      <a
        href="#place"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-field"
      >
        Skip to ask for a place
      </a>

      <main>
        <section className="relative flex min-h-[100dvh] flex-col overflow-hidden px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-[max(1.15rem,env(safe-area-inset-top))] sm:px-8 lg:px-12">
          <Image
            src="/hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_40%] lg:object-[72%_center]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-field via-field/85 to-field/40 lg:via-field/70 lg:to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-field via-field/20 to-field/55"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col">
            <Logo />
            <div className="flex max-w-3xl flex-1 flex-col">
              <div className="flex flex-1 flex-col justify-center py-8 sm:py-10">
                <h1 className="max-w-[18ch] font-serif text-[2.05rem] font-light leading-[1.12] tracking-[-0.028em] text-ink sm:text-5xl sm:leading-[1.08] lg:text-[3.35rem]">
                  You were working with
                  <br className="hidden min-[380px]:block" /> the body you could
                  see.
                </h1>
                <p className="prose-line mt-6 max-w-[42ch] text-[1.05rem] font-light leading-[1.55] text-ink/90 sm:mt-8 sm:max-w-[48ch] sm:text-xl sm:leading-[1.5]">
                  Over four hundred yoga teachers have studied with me. They
                  left seeing yoga differently, and they entered the tradition.
                </p>
                <p className="mt-6 font-ui text-[0.78rem] font-medium tracking-[0.06em] text-signal sm:mt-8">
                  <strong className="font-medium">{formingLine()}</strong>
                </p>
              </div>
              <div id="place" className="w-full max-w-xl pb-2 sm:pb-6">
                <WaitlistForm source="hero" />
                <p className="mt-3 max-w-md font-serif text-[0.95rem] leading-relaxed text-quiet italic">
                  It starts the Monday after the group fills. I&apos;ll send
                  the format and the price. Asking doesn&apos;t take the
                  place. You sit with the terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        <figure className="relative h-[38vh] min-h-[220px] w-full overflow-hidden sm:h-[46vh]">
          <Image
            src="/hall.png"
            alt="A pillared hall in India"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-field/35" />
        </figure>

        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8 lg:px-12">
          <section className="py-16 sm:py-24">
            <h2 className="font-serif text-[1.65rem] font-light tracking-[-0.02em] sm:text-3xl">
              What&apos;s in it
            </h2>
            <ul className="mt-10 space-y-5">
              {curriculum.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 text-[1.05rem] font-light leading-[1.55] text-ink/95 sm:text-[1.12rem]"
                >
                  <span
                    className="mt-[0.7em] h-[3px] w-[3px] shrink-0 bg-signal"
                    aria-hidden="true"
                  />
                  <span className="measure">{item}</span>
                </li>
              ))}
            </ul>
            <p className="prose-line measure mt-12 text-[1.08rem] font-light leading-[1.6]">
              Repetition is the method. You will hear the same thing several
              ways on purpose.
            </p>
            <p className="prose-line measure mt-6 text-[1.08rem] font-light leading-[1.6]">
              <strong className="font-medium">
                The certificate is mine, not Yoga Alliance&apos;s. It does not
                lead to RYT status.
              </strong>{" "}
              If that&apos;s what you need, this isn&apos;t it.
            </p>
          </section>

          <section className="border-t border-rule py-16 sm:py-24">
            <h2 className="font-serif text-[1.65rem] font-light tracking-[-0.02em] sm:text-3xl">
              How you enter
            </h2>
            <div className="mt-10 space-y-6 text-[1.12rem] font-light leading-[1.65] sm:text-[1.22rem] sm:leading-[1.6]">
              <p className="measure">The training is in session.</p>
              <p className="measure">
                You come in with a group of twelve. When those twelve are in,
                that group starts the following Monday. A new group of twelve
                opens the same day.
              </p>
              <p className="measure">
                The live room is mixed. People further along and people just
                in work in the same session.
              </p>
              <p className="measure">You finish when you can teach it.</p>
            </div>
          </section>
        </div>

        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8 lg:px-12">
          <section className="border-t border-rule py-16 sm:py-24">
            <h2 className="font-serif text-[1.65rem] font-light tracking-[-0.02em] sm:text-3xl">
              What you learn
            </h2>
            <div className="mt-12 space-y-12">
              {learn.map((item) => (
                <article key={item.lead} className="measure">
                  <h3 className="text-[1.2rem] font-medium leading-snug tracking-[-0.015em] sm:text-[1.32rem]">
                    {item.lead}
                  </h3>
                  <p className="mt-3 text-[1.08rem] font-light leading-[1.6] text-ink/90">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="border-t border-rule py-16 sm:py-24">
            <h2 className="font-serif text-[1.65rem] font-light tracking-[-0.02em] sm:text-3xl">
              Nothing here requires belief.
            </h2>
            <div className="mt-10 space-y-6 text-[1.12rem] font-light leading-[1.65] sm:text-[1.22rem] sm:leading-[1.6]">
              <p className="measure">
                The classical model is coherent, it is old, and it produces a
                practice that hangs together. You can test every part of it
                yourself.
              </p>
              <p className="measure">
                Modern research sits next to that model. I will tell you which
                sentences are the tradition&apos;s, and which are mine.
              </p>
              <p className="measure">
                Ask me for the source. That is my job.
              </p>
            </div>
          </section>

          <section className="border-t border-rule py-16 sm:py-24">
            <h2 className="font-serif text-[1.65rem] font-light tracking-[-0.02em] sm:text-3xl">
              Who this is for, and who it isn&apos;t
            </h2>
            <div className="mt-12 grid gap-14 sm:grid-cols-2 sm:gap-16">
              <div>
                <h3 className="text-[1.2rem] font-medium tracking-[-0.015em]">
                  Come if
                </h3>
                <ul className="mt-6 space-y-4">
                  {comeIf.map((item) => (
                    <li
                      key={item}
                      className="text-[1.08rem] font-light leading-[1.5]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[1.2rem] font-medium tracking-[-0.015em]">
                  Don&apos;t come if
                </h3>
                <ul className="mt-6 space-y-6 text-[1.08rem] font-light leading-[1.5]">
                  <li>
                    <strong className="font-medium">
                      you need a Yoga Alliance card for the gym.
                    </strong>{" "}
                    Many of the best students I trained teach in gyms. I
                    don&apos;t charge extra for the Alliance. I don&apos;t share
                    their standards.
                  </li>
                  <li>
                    <strong className="font-medium">
                      you want it finished in a couple of months.
                    </strong>{" "}
                    Becoming a yoga teacher in a couple of months is about as
                    likely as becoming a violinist in a couple of months.
                  </li>
                  <li>
                    <strong className="font-medium">
                      you want your practice upgraded and your worldview left
                      alone.
                    </strong>{" "}
                    This training goes after the worldview. That is the part
                    that changes the practice.
                  </li>
                  <li>
                    <strong className="font-medium">
                      you want to be told you&apos;ve been doing it right.
                    </strong>{" "}
                    Some of what you&apos;ve built may need revisiting.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <figure className="relative mx-auto w-full max-w-4xl px-5 sm:px-8 lg:px-12">
          <Image
            src="/latvia.jpeg"
            alt="A training group in Latvia"
            width={2000}
            height={1333}
            sizes="(max-width: 896px) 100vw, 896px"
            className="h-auto w-full"
          />
        </figure>

        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8 lg:px-12">
          <section className="py-16 sm:py-24">
            <h2 className="font-serif text-[1.65rem] font-light tracking-[-0.02em] sm:text-3xl">
              One story
            </h2>
            <div className="mt-10 space-y-6 text-[1.12rem] font-light leading-[1.7] sm:text-[1.22rem]">
              <p className="measure">
                I went to India after years of practising other people&apos;s
                systems.
              </p>
              <p className="measure">
                What I found in India sorted into two camps. One was physical.
                It stopped at the body you could see. The other was spiritual,
                and it split again — the religious schools had answers but no
                reasons. <em>Because Krishna said so.</em> Not good enough.
              </p>
              <p className="measure">
                Then there were teachers who worked by principles I knew from
                science. Who argued back. Who showed their sources.
              </p>
              <p className="measure">
                Sooner or later, every one of them said the same word.
              </p>
              <p className="font-serif text-[1.85rem] font-light italic tracking-[-0.02em] sm:text-[2.15rem]">
                Tantra.
              </p>
              <p className="measure">
                I was instinctively suspicious. I knew what everyone knows —
                tantra sex, erotic temples. It took me years to find out how
                wrong that was.
              </p>
              <p className="measure">
                That&apos;s the direction I went. I&apos;m still going.
              </p>
            </div>
          </section>

          <section className="border-t border-rule py-16 sm:py-28">
            <Rule />
            <p className="prose-line measure mt-10 text-[1.35rem] font-light leading-[1.45] tracking-[-0.02em] sm:text-[1.7rem] sm:leading-[1.35]">
              {formingLine()}
            </p>
            <p className="prose-line measure mt-6 text-[1.12rem] font-light leading-[1.6] sm:text-[1.22rem]">
              I&apos;ll send the format and the price. You sit with them. A
              place is taken when you take it.
            </p>
            <div className="mt-10 max-w-xl">
              <WaitlistForm source="close" />
              <p className="mt-3 max-w-md font-serif text-[0.95rem] leading-relaxed text-quiet italic">
                Asking doesn&apos;t take the place.
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="px-5 pb-12 pt-4 sm:px-8 lg:px-12">
        <p className="mx-auto max-w-3xl font-ui text-[0.78rem] leading-relaxed tracking-[0.01em] text-quiet">
          For personal guidance and initiation into the tradition:{" "}
          <a
            href="https://ancientscience.com"
            className="text-quiet underline decoration-rule underline-offset-4 transition-colors hover:text-ink"
          >
            ancientscience.com
          </a>
        </p>
      </footer>
    </>
  );
}
