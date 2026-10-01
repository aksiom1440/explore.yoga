import Image from "next/image";
import { Logo } from "@/components/logo";
import { SiteFooter } from "@/components/site-footer";
import { WaitlistForm } from "@/components/waitlist-form";
import {
  PROGRAM_NAME,
  intakeLine,
  paymentLine,
  priceLine,
} from "@/lib/intake";

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
    body: "Connective tissue is one continuous web, and the tradition never split body from mind in the first place. You stop treating a hip as only a hip.",
  },
  {
    lead: "How to build an asana sequence from the ancient principles.",
    body: "The elements and doshas set the order, not habit. They are the same principles the tradition uses for everything else.",
  },
  {
    lead: "How to teach this to someone who came for a better backbend.",
    body: "Most won't ask you for prana. They can still feel that you help them in a way other teachers don't.",
  },
  {
    lead: "How to hold a class where the thinking mind stands down.",
    body: "The thinking mind will run the room if you let it. You learn to build the conditions where it goes quiet, so the student can change what sits underneath.",
  },
  {
    lead: "To know twenty times more than you say.",
    body: "Even if you only ever teach asana, your students feel what you know and leave unsaid.",
  },
];

const comeIf = [
  "you've taught for years and are still open to a new model",
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
        Skip to the Yoga Teacher Training form
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
                  This training is about what&apos;s underneath it. Over four
                  hundred yoga teachers have studied with me.
                </p>
                <p className="mt-6 font-ui text-[0.78rem] font-medium tracking-[0.06em] text-signal sm:mt-8">
                  <strong className="font-medium">{PROGRAM_NAME}</strong>
                </p>
                <p className="mt-2 font-ui text-[0.78rem] font-medium tracking-[0.06em] text-signal">
                  {intakeLine()}
                </p>
                <p className="mt-2 font-ui text-[0.78rem] font-medium tracking-[0.06em] text-signal">
                  {priceLine()}
                </p>
              </div>
              <div id="place" className="w-full max-w-xl pb-2 sm:pb-6">
                <WaitlistForm source="hero" />
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
              <p className="measure">
                The training is already running. New people start together, in
                small groups. When you ask, I write back with the earliest date
                you can start.
              </p>
              <p className="measure">
                It runs online for six months from the day your group starts,
                in two-week steps. Each step is four hours of recorded lectures,
                your own practice with the practice videos, and a live session.
                Your practice starts on the first day.
              </p>
              <p className="measure">
                Six months hold about two hundred hours: lectures, practice with
                the videos, live sessions and teaching others, counted the way
                200-hour trainings count them.
              </p>
              <p className="measure">
                Live sessions are in English, at a set day and time, and last
                one to two hours. You get the day and time in the email, before
                you take a place, so you can check it against your calendar.
                Every session is recorded. Everything in the training,
                recordings included, is yours for those six months.
              </p>
              <p className="measure">
                Some live sessions are for your group alone. Others bring
                several groups together, so people who joined months ago and
                people who joined this week are in the same session.
              </p>
              <p className="measure">{paymentLine()}</p>
              <p className="measure">At the end, you can pass the system on.</p>
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
                The classical model is old and coherent, and you can test every
                part of it yourself.
              </p>
              <p className="measure">
                Modern research sits next to that model. I will tell you which
                claims are the tradition&apos;s, which come from research, and
                which are mine.
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
            <p className="prose-line measure mt-10 text-[1.08rem] font-light leading-[1.6]">
              You don&apos;t need a practice background. A long practice
              usually means a readier body and more to unlearn. A short one
              usually means the practice is harder at first, and learning
              something new is easy.
            </p>
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
                    Some gyms ask for one. I don&apos;t register with the
                    Alliance: I don&apos;t share their standards, and I
                    won&apos;t add their fee to your price. Many of the best
                    students I trained teach in gyms anyway.
                  </li>
                  <li>
                    <strong className="font-medium">
                      you want it finished in a couple of months.
                    </strong>{" "}
                    Nobody becomes a violinist in a couple of months either.
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
            alt="Students waving in front of a thatched farmhouse"
            width={2000}
            height={1333}
            sizes="(max-width: 896px) 100vw, 896px"
            className="h-auto w-full"
          />
          <figcaption className="mt-3 font-ui text-[0.78rem] tracking-[0.01em] text-quiet">
            An earlier training group in Latvia.
          </figcaption>
        </figure>

        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8 lg:px-12">
          <section className="py-16 sm:py-24">
            <h2 className="font-serif text-[1.65rem] font-light tracking-[-0.02em] sm:text-3xl">
              Who teaches it
            </h2>
            <div className="mt-10 grid items-end gap-8 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-10">
              <Image
                src="/miska.jpg"
                alt="Miska Käppi"
                width={1058}
                height={1300}
                sizes="(max-width: 640px) 60vw, 240px"
                className="h-auto w-3/5 sm:w-full"
              />
              <div className="space-y-6 text-[1.12rem] font-light leading-[1.65] sm:text-[1.22rem] sm:leading-[1.6]">
                <p className="measure">
                  I&apos;m Miska Käppi. I grew up in Lapland, a sceptic raised
                  on a strictly materialist picture of the world.
                </p>
                <p className="measure">
                  I have studied in a tantric line since 2012 and trained yoga
                  teachers since 2014. I teach the whole training myself.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-rule py-16 sm:py-24">
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
                The rest were teachers who worked by principles I knew from
                science. They argued back. They showed their sources.
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
                That&apos;s the direction I went, and I&apos;m still going.
                This training is what I found along the way, in the order I
                wish I had found it.
              </p>
            </div>
          </section>

          <section className="border-t border-rule py-16 sm:py-28">
            <Rule />
            <p className="prose-line measure mt-10 text-[1.35rem] font-light leading-[1.45] tracking-[-0.02em] sm:text-[1.7rem] sm:leading-[1.35]">
              {PROGRAM_NAME}
            </p>
            <p className="prose-line measure mt-4 text-[1.12rem] font-light leading-[1.6] sm:text-[1.22rem]">
              {intakeLine()}
            </p>
            <p className="prose-line measure mt-4 text-[1.12rem] font-light leading-[1.6] sm:text-[1.22rem]">
              {priceLine()}
            </p>
            <div className="mt-10 max-w-xl">
              <WaitlistForm source="close" />
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
