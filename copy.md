# explore.yoga — page copy

Edit this file. When you're done, say "päivitä sivu".

The page never states a group size or how many places are left. Whether places are open is `INTAKE_OPEN` in `lib/intake.ts`: set it to `false` while the next group is full, and back to `true` when places open again. The hero, the close, the metadata and the OG image all read from there.

The reading map at `/books` ("So you want to learn tantra yoga?") is drawn as a map: three doors merge into tantra, a spine of books with side roads leads down to "The studies have finally begun", and the path branches into mantra, the texts, hatha and medicine. "Around the path" has its own four branches. Everything lives in `lib/books.ts`: `via` is the line on the arrow into a book, `note` the caption above it. Its form tags asks as `place-books` in GoHighLevel.

The seller's details (name, registry code, VAT number, address, email, phone) are in `lib/company.ts`. The footer, the terms of sale and the privacy page read from there.
The product name is `PROGRAM_NAME` in `lib/intake.ts`.
The price is `PRICE_EUROS`. The six-payment plan is `ENROL_EUROS` plus `MONTHLY_EUROS` × `MONTHS` (shown as `priceLine()` in the hero and the close, and `paymentLine()` in How you enter).

Never compare the price with other trainings, and never call it cheap or affordable.

---

## Hero

**Headline**
You were working with the body you could see.

**Dek**
This training is about what's underneath it. Over four hundred yoga teachers have studied with me.

**Intake**
Yoga Teacher Training
Places are open for the next group.
2,500 euros at once, or 2,900 in six payments

(While the next group is full: "The next group is full. Ask, and I will tell you when the one after it starts.")

**Form button**
Ask for a place

**Form fields**
your name
your email
what you've been teaching, or why you're writing
☐ Also write to me now and then about the tradition and new groups. I can leave any time. (optional, unticked; the exact words are `NEWSLETTER_CONSENT` in `lib/intake.ts` and are stored with each yes)

**Under the form**
I will write back with how the training runs, the day and time of the live sessions, and the earliest date you can start.
Asking reserves nothing and commits you to nothing. You decide after my reply.
I use what you send to answer you about the training, and send letters only if you tick the box. Privacy (link)

---

## What's in it

**Heading**
What's in it

The worldview the practice assumes — and why asana stops making sense without it
Yoga's history: pre-modern and modern, and the exact point where the two separate
Tantra — where it actually comes from, and how its reputation got made
Prana: the nadis, the vayus, the diaphragm system
Asana anatomy from the cell upward — connective tissue, tensegrity, the joint's own sense organs
Ayurveda: the elements, the three doshas, and the sequence built out of them
The eight limbs — and why Patanjali is not the best place to begin
Surya namaskara, phase by phase, with the twelve mantras
Teaching: how a room gets built, and why you correct far less than you were taught to
Asana, pranayama, bandha, mantra and meditation, as one system

**After the list**
Repetition is the method. You will hear the same thing several ways on purpose.

The certificate is mine, not Yoga Alliance's. It does not lead to RYT status. If that's what you need, this isn't it.

---

## How you enter

**Heading**
How you enter

The training is already running. New people start together, in small groups. When you ask, I write back with the earliest date you can start.

It runs online for six months from the day your group starts, in two-week steps. Each step is four hours of recorded lectures, your own practice with online classes, and a live session. Your practice starts on the first day.

Six months hold about two hundred hours: lectures, online classes, live sessions and teaching others, counted the way 200-hour trainings count them.

Live sessions are in English, at a set day and time, and last one to two hours. You get the day and time in the email, before you take a place, so you can check it against your calendar. Every session is recorded. Everything in the training, recordings included, is yours for those six months.

Some live sessions are for your group alone. Others bring several groups together, so people who joined months ago and people who joined this week are in the same session.

2,500 euros at once, or 1,000 euros to enrol and then 380 a month for five months.

At the end, you can pass the system on.

---

## What you learn

**Heading**
What you learn

**Lead**
To read mind and body as one system.
**Body**
Connective tissue is one continuous web, and the tradition never split body from mind in the first place. You stop treating a hip as only a hip.

**Lead**
How to build an asana sequence from the ancient principles.
**Body**
The elements and doshas set the order, not habit. They are the same principles the tradition uses for everything else.

**Lead**
How to teach this to someone who came for a better backbend.
**Body**
Most won't ask you for prana. They can still feel that you help them in a way other teachers don't.

**Lead**
How to hold a class where the thinking mind stands down.
**Body**
The thinking mind will run the room if you let it. You learn to build the conditions where it goes quiet, so the student can change what sits underneath.

**Lead**
To know twenty times more than you say.
**Body**
Even if you only ever teach asana, your students feel what you know and leave unsaid.

---

## Nothing here requires belief

**Heading**
Nothing here requires belief.

The classical model is old and coherent, and you can test every part of it yourself.

Modern research sits next to that model. I will tell you which claims are the tradition's, which come from research, and which are mine.

Ask me for the source. That is my job.

If you want to start reading now, here is the reading map. (links to /books)

---

## Who this is for, and who it isn't

**Heading**
Who this is for, and who it isn't

You don't need a practice background. A long practice usually means a readier body and more to unlearn. A short one usually means the practice is harder at first, and learning something new is easy.

**Come if**
you've taught for years and are still open to a new model
you're not planning to teach, which is how some of the best teachers I trained arrived
you want the system around asana, not more asana
you're willing to take the worldview with the practice
you're scientifically minded, and you can still let the spiritual in
you're spiritually minded, and you can still let the science in

**Don't come if**
you need a Yoga Alliance card for the gym. Some gyms ask for one. I don't register with the Alliance: I don't share their standards, and I won't add their fee to your price. Many of the best students I trained teach in gyms anyway.
you want it finished in a couple of months. Nobody becomes a violinist in a couple of months either.
you want your practice upgraded and your worldview left alone. This training goes after the worldview. That is the part that changes the practice.
you want to be told you've been doing it right. Some of what you've built may need revisiting.

---

## Photo caption

An earlier training group in Latvia.

---

## Who teaches it

**Heading**
Who teaches it

(Portrait: `public/miska.jpg`)

I'm Miska Käppi. I grew up in Lapland, a sceptic raised on a strictly materialist picture of the world.

I have studied yoga since 2006, in a tantric line since 2012 and trained yoga teachers since 2014. I teach the whole training myself.

---

## One story

**Heading**
One story

I went to India after years of practising other people's systems.

What I found in India sorted into two camps. One was physical. It stopped at the body you could see. The other was spiritual, and it split again — the religious schools had answers but no reasons. Because Krishna said so. Not good enough.

The rest were teachers who worked by principles I knew from science. They argued back. They showed their sources.

Sooner or later, every one of them said the same word.

Tantra.

I was instinctively suspicious. I knew what everyone knows — tantra sex, erotic temples. It took me years to find out how wrong that was.

That's the direction I went, and I'm still going. This training is what I found along the way, in the order I wish I had found it.

---

## Close

Yoga Teacher Training

Places are open for the next group.

2,500 euros at once, or 2,900 in six payments

I will write back with how the training runs, the day and time of the live sessions, and the earliest date you can start.
Asking reserves nothing and commits you to nothing. You decide after my reply.

---

## Footer

For personal guidance and initiation into the tradition: ancientscience.com

Ancient Science OÜ · Registry code · VAT · address · email · phone (from `lib/company.ts`)

Reading map · Terms of sale · Privacy · Withdraw from contract here

The three legal pages are `app/terms/page.tsx`, `app/privacy/page.tsx` and `app/withdraw/page.tsx`. "Withdraw from contract here" is the withdrawal function EU consumer law requires: a two-step form that lands in GoHighLevel with the tag `explore.yoga withdrawal`.

---

## Search results and link previews

**Title**
Yoga Teacher Training with Miska Käppi

**Description** (keep it under about 160 characters)
Miska Käppi's Yoga Teacher Training: what's underneath the body you can see. Over four hundred teachers have studied with him. Places are open for the next group.

---

## After sending

Replaces the form and the lines under it, in both places on the page. The first name and the email come from what they typed.

*Thank you, Anna. Your note reached me.*
I will write to anna@example.com with how the training runs, the day and time of the live sessions, and the earliest date you can start.
Nothing is reserved yet, and you owe nothing. You decide once you have read it.
If my reply hasn't arrived within two days, look in your spam folder.
Wrong address? Send it again

---

## Form messages

A name helps me write back.
That doesn't look like an email address.
A line about you, then I can write back.
Wait a moment, then try once more.
Couldn't send that. Try again.
