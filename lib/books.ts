/** The reading map at /books. Each note is one line in Miska's voice. */

export type Book = {
  title: string;
  author: string;
  note: string;
  bonus?: boolean;
};

export type Shelf = {
  id: string;
  heading: string;
  lead?: string;
  books: Book[];
};

export const doors: Shelf[] = [
  {
    id: "new-to-yoga",
    heading: "I'm new to yoga",
    books: [
      {
        title: "Living Yoga: Creating a Life Practice",
        author: "Christy Turlington",
        note: "Yoga will make your life nice.",
      },
      {
        title: "Anatomy of Hatha Yoga",
        author: "H. David Coulter",
        note: "How not to hurt yourself doing asanas. Don't believe everything this book says.",
      },
      {
        title: "Breath: The New Science of a Lost Art",
        author: "James Nestor",
        note: "What the breath does, told as a story. The best first step toward pranayama.",
      },
    ],
  },
  {
    id: "into-spirituality",
    heading: "I'm into spirituality",
    books: [
      {
        title: "Sexual Secrets: The Alchemy of Ecstasy",
        author: "Nik Douglas and Penny Slinger",
        note: "Tantra for beginners. Hope you aren't afraid of nude art.",
      },
      {
        title:
          "Rainbow Body: A History of the Western Chakra System from Blavatsky to Brennan",
        author: "Kurt Leland",
        note: "You've been lied to about chakras.",
      },
      {
        title: "The World's Religions",
        author: "Huston Smith",
        note: "Every great tradition, read for what it is trying to say.",
      },
    ],
  },
  {
    id: "scientific-approach",
    heading: "I prefer the scientific approach",
    books: [
      {
        title: "Wholeness and the Implicate Order",
        author: "David Bohm",
        note: "Yoga is the science of union. So start by understanding wholeness.",
      },
      {
        title: "The Idea of the World",
        author: "Bernardo Kastrup",
        note: "Understanding consciousness is essential too.",
      },
      {
        title: "The Turning Point",
        author: "Fritjof Capra",
        note: "What this will mean for science.",
        bonus: true,
      },
      {
        title: "The Science Delusion",
        author: "Rupert Sheldrake",
        note: "Many basic assumptions have to be abandoned.",
      },
      {
        title: "The Case Against Reality",
        author: "Donald Hoffman",
        note: "Why what you see is an interface, not the world.",
      },
      {
        title: "The Book: On the Taboo Against Knowing Who You Are",
        author: "Alan Watts",
        note: "The same point, with a sense of humour.",
      },
    ],
  },
];

export const path: Shelf[] = [
  {
    id: "ready-for-tantra",
    heading: "You're ready for tantra",
    lead: "All three doors lead here.",
    books: [
      {
        title: "Shakti and Shakta",
        author: "Sir John Woodroffe",
        note: "A collection of excellent essays on tantra.",
      },
      {
        title: "The Serpent Power",
        author: "Sir John Woodroffe (Arthur Avalon)",
        note: "The first three hundred pages are the introduction. The rest is the traditional texts.",
        bonus: true,
      },
      {
        title: "Tantra Illuminated",
        author: "Christopher D. Wallis",
        note: "The clearest modern map of the Trika and Kaula lines.",
      },
      {
        title:
          "Tantra: Sex, Secrecy, Politics, and Power in the Study of Religion",
        author: "Hugh B. Urban",
        note: "How the bad name was made.",
      },
      {
        title: "The Tantric Way: Art, Science, Ritual",
        author: "Ajit Mookerjee and Madhu Khanna",
        note: "Temple art as metaphysics, not an erotic tour.",
      },
    ],
  },
  {
    id: "relevance",
    heading: "What is the relevance of this?",
    lead: "Dharma in practice.",
    books: [
      {
        title: "Born to Win",
        author: "Muriel James and Dorothy Jongeward",
        note: "Know the theory, and live it.",
      },
      {
        title: "Games People Play",
        author: "Eric Berne",
        note: "The transactional analysis Born to Win is built on.",
      },
      {
        title: "Man's Search for Meaning",
        author: "Viktor E. Frankl",
        note: "A person can endure a great deal if life has a why.",
      },
    ],
  },
  {
    id: "studies-begin",
    heading: "Congratulations. The studies have finally begun.",
    books: [
      {
        title: "Divine Initiation",
        author: "Bhagavan Shri Shanmukha Anantha Natha",
        note: "The lineage book of Vedic code, in two parts: sun and moon.",
      },
      {
        title: "Third Eye of the Buddhist",
        author: "Bhagavan Shri Shanmukha Anantha Natha",
        note: "The same, the Buddhist version.",
        bonus: true,
      },
    ],
  },
];

export const branches: Shelf[] = [
  {
    id: "mantra-and-sanskrit",
    heading: "Mantra and Sanskrit",
    books: [
      {
        title: "The Garland of Letters",
        author: "Sir John Woodroffe",
        note: "How the science of mantra works.",
      },
      {
        title: "Parā-trīśikā-Vivaraṇa: The Secret of Tantric Mysticism",
        author: "Abhinavagupta, translated by Jaideva Singh",
        note: "The same in traditional form, and in more detail.",
      },
      {
        title: "Vāc: The Concept of the Word in Selected Hindu Tantras",
        author: "André Padoux",
        note: "The fifty letters, in scholarly detail.",
      },
      {
        title: "Introduction to Sanskrit, Part One",
        author: "Thomas Egenes",
        note: "By now you know you have to learn Sanskrit.",
      },
      {
        title: "Devavāṇīpraveśikā: An Introduction to the Sanskrit Language",
        author: "Robert P. Goldman and Sally J. Sutherland Goldman",
        note: "You can also learn it the traditional way.",
      },
      {
        title: "The Metaphysical Principles of the Infinitesimal Calculus",
        author: "René Guénon",
        note: "There is a lot of mathematics behind the science of mantra.",
      },
    ],
  },
  {
    id: "traditional-texts",
    heading: "The traditional texts: Trika, Kaula and more",
    books: [
      {
        title: "Yogasūtrabhāṣyavivaraṇa of Śaṅkara",
        author: "T. S. Rukmani",
        note: "Patañjali's Yoga Sūtra, with traditional commentary.",
      },
      {
        title: "The Yoga Sūtras of Patañjali",
        author: "Edwin F. Bryant",
        note: "The classical commentators, gathered in one readable volume.",
      },
      {
        title: "Kulārṇava Tantra",
        author: "Introduction by Arthur Avalon, readings by M. P. Pandit",
        note: "The most cited text of kaula tantra.",
      },
      {
        title: "Spanda-Kārikās: The Divine Creative Pulsation",
        author: "Jaideva Singh",
        note: "Wholeness and implicate order, in traditional form.",
      },
      {
        title: "Śiva Sūtras: The Yoga of Supreme Identity",
        author: "Jaideva Singh",
        note: "Beautiful shaiva tantra.",
      },
    ],
  },
  {
    id: "hatha-texts",
    heading: "Hatha yoga texts",
    lead: "The traditional sources for physical yoga: asana and the rest.",
    books: [
      {
        title: "Hatha Yoga Pradipika",
        author: "Svātmārāma, translated by Brian Dana Akers",
        note: "The best known of the three.",
      },
      {
        title: "The Gheranda Samhita",
        author: "Translated by James Mallinson",
        note: "Practice, step by step.",
      },
      {
        title: "The Shiva Samhita",
        author: "Translated by James Mallinson",
        note: "Practice inside its philosophy.",
      },
    ],
  },
  {
    id: "medicine",
    heading: "Traditional medicine",
    books: [
      {
        title: "Ayurveda & Acupuncture",
        author: "Frank Ros",
        note: "Indian traditional medicine.",
      },
      {
        title: "Textbook of Ayurveda, Volume One: Fundamental Principles",
        author: "Vasant Lad",
        note: "The elements and the doshas, properly.",
      },
      {
        title: "The Web That Has No Weaver",
        author: "Ted J. Kaptchuk",
        note: "Chinese traditional medicine.",
      },
    ],
  },
];

export const around: Shelf[] = [
  {
    id: "body-and-breath",
    heading: "Body and breath",
    books: [
      {
        title: "Body, Mind, and Sport",
        author: "John Douillard",
        note: "Breathe through the nose, and see what changes.",
      },
      {
        title: "Anatomy Trains",
        author: "Thomas W. Myers",
        note: "Connective tissue is continuous. Here is the map.",
      },
      {
        title: "Fascia: The Tensional Network of the Human Body",
        author:
          "Edited by Robert Schleip, Thomas W. Findley, Leon Chaitow and Peter A. Huijing",
        note: "The research behind the web.",
      },
      {
        title: "Biotensegrity: The Structural Basis of Life",
        author: "Graham Scarr",
        note: "Why a body is not a stack of bricks.",
      },
    ],
  },
  {
    id: "history",
    heading: "History",
    books: [
      {
        title: "Roots of Yoga",
        author: "James Mallinson and Mark Singleton",
        note: "The pre-modern sources, in translation.",
      },
      {
        title: "Yoga Body: The Origins of Modern Posture Practice",
        author: "Mark Singleton",
        note: "How modern asana was built. Know the argument; I disagree with part of it.",
      },
      {
        title: "A History of Modern Yoga",
        author: "Elizabeth De Michelis",
        note: "Vivekananda, Theosophy and the making of modern yoga.",
      },
      {
        title: "Raja Yoga",
        author: "Swami Vivekananda",
        note: "1896, and the moment asana was left behind.",
      },
      {
        title: "Yoga: Immortality and Freedom",
        author: "Mircea Eliade",
        note: "The classic study. Still worth reading.",
      },
    ],
  },
  {
    id: "myth",
    heading: "Myth",
    books: [
      {
        title: "Myths and Symbols in Indian Art and Civilization",
        author: "Heinrich Zimmer",
        note: "The goddesses and the diagrams, read as metaphysics.",
      },
      {
        title: "The Myth of the Eternal Return",
        author: "Mircea Eliade",
        note: "Cyclic time, and how we lost it.",
      },
      {
        title: "Yantra: The Tantric Symbol of Cosmic Unity",
        author: "Madhu Khanna",
        note: "The diagram as a map of the cosmos.",
      },
    ],
  },
  {
    id: "mind-and-meditation",
    heading: "Mind and meditation",
    books: [
      {
        title: "The Psychology of Kundalini Yoga",
        author: "C. G. Jung",
        note: "Jung's 1932 seminar on a text from The Serpent Power, for better and worse.",
      },
      {
        title: "On the Psychology of Meditation",
        author: "Claudio Naranjo and Robert E. Ornstein",
        note: "Two psychologists take meditation seriously.",
      },
      {
        title: "The Relaxation Response",
        author: "Herbert Benson",
        note: "Where research on meditation began, and where it stopped.",
      },
      {
        title: "Freedom from the Known",
        author: "J. Krishnamurti",
        note: "Choiceless awareness, in his own words.",
      },
      {
        title: "Crest-Jewel of Discrimination",
        author:
          "Shankara, translated by Swami Prabhavananda and Christopher Isherwood",
        note: "Shankara, short and clear.",
      },
    ],
  },
];
