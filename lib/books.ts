/**
 * The reading map at /books, drawn as a map: three doors merge into tantra,
 * tantra leads down a spine of hubs, and the spine branches into the texts.
 * `via` is the line on the arrow into a book; `note` is the caption above it.
 */

export type Book = {
  title: string;
  author: string;
  note?: string;
  via?: string;
};

export type Chain = {
  label: string;
  lead?: string;
  tone: string;
  books: Book[];
};

export type Hub = {
  via: string;
  tone: string;
  book: Book;
  sides: Book[];
};

export const doors: Chain[] = [
  {
    label: "I'm new to yoga",
    tone: "#7d8f5a",
    books: [
      {
        title: "Living Yoga: Creating a Life Practice",
        author: "Christy Turlington",
        note: "Yoga will make your life nice.",
      },
      {
        title: "Anatomy of Hatha Yoga",
        author: "H. David Coulter",
        via: "How not to hurt yourself doing asanas",
        note: "Don't believe everything this book says.",
      },
      {
        title: "Breath: The New Science of a Lost Art",
        author: "James Nestor",
        via: "Then learn to breathe",
        note: "What the breath does, told as a story.",
      },
    ],
  },
  {
    label: "I'm into spirituality",
    tone: "#9c5a6e",
    books: [
      {
        title: "Sexual Secrets: The Alchemy of Ecstasy",
        author: "Nik Douglas and Penny Slinger",
        via: "Hope you aren't afraid of nude art",
        note: "Tantra for beginners.",
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
    label: "I prefer the scientific approach",
    tone: "#5f7f8f",
    books: [
      {
        title: "Wholeness and the Implicate Order",
        author: "David Bohm",
        via: "Yoga is the science of union",
        note: "So start by understanding wholeness.",
      },
      {
        title: "The Idea of the World",
        author: "Bernardo Kastrup",
        note: "Understanding consciousness is essential too.",
      },
      {
        title: "The Turning Point",
        author: "Fritjof Capra",
        via: "Bonus round",
        note: "What will this mean for science?",
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

export const spine: Hub[] = [
  {
    via: "You're ready for tantra",
    tone: "#9a3d2c",
    book: {
      title: "Shakti and Shakta",
      author: "Sir John Woodroffe",
      note: "A collection of excellent essays on tantra.",
    },
    sides: [
      {
        title: "The Serpent Power",
        author: "Sir John Woodroffe (Arthur Avalon)",
        via: "Bonus round",
        note: "The first three hundred pages are the introduction. The rest is the traditional texts.",
      },
      {
        title: "Tantra Illuminated",
        author: "Christopher D. Wallis",
        via: "Today's map",
        note: "The clearest modern account of the Trika and Kaula lines.",
      },
      {
        title:
          "Tantra: Sex, Secrecy, Politics, and Power in the Study of Religion",
        author: "Hugh B. Urban",
        via: "Why the bad name?",
        note: "They wrote about tantra before they had read one.",
      },
      {
        title: "The Tantric Way: Art, Science, Ritual",
        author: "Ajit Mookerjee and Madhu Khanna",
        via: "Still not afraid of nude art?",
        note: "Temple art as metaphysics, not an erotic tour.",
      },
    ],
  },
  {
    via: "What is the relevance of this?",
    tone: "#b0884a",
    book: {
      title: "Born to Win",
      author: "Muriel James and Dorothy Jongeward",
      note: "On the surface, this is Gestalt psychology, but it gives a nice answer why you should find your potential, your dharma.",
    },
    sides: [
      {
        title: "Games People Play",
        author: "Eric Berne",
        via: "The theory behind it",
        note: "Transactional analysis, from the man who made it.",
      },
      {
        title: "Man's Search for Meaning",
        author: "Viktor E. Frankl",
        via: "And why it matters",
        note: "A person can endure a great deal if life has a why.",
      },
    ],
  },
  {
    via: "Congratulations! The studies have finally begun.",
    tone: "#c4a24c",
    book: {
      title: "Divine Initiation",
      author: "Bhagavan Shri Shanmukha Anantha Natha",
      note: "Learn The Vedic Code",
    },
    sides: [
      {
        title: "Third Eye of the Buddhist",
        author: "Bhagavan Shri Shanmukha Anantha Natha",
        via: "Bonus round",
        note: "The same, the Buddhist version.",
      },
    ],
  },
];

export const branches: Chain[] = [
  {
    label: "Mantra, prana",
    tone: "#a8442f",
    books: [
      {
        title: "The Garland of Letters",
        author: "Sir John Woodroffe",
        note: "This is how the science of mantra works.",
      },
      {
        title: "Parā-trīśikā-Vivaraṇa: The Secret of Tantric Mysticism",
        author: "Abhinavagupta, translated by Jaideva Singh",
        note: "And the same said in traditional form, in more detail.",
      },
      {
        title: "Vāc: The Concept of the Word in Selected Hindu Tantras",
        author: "André Padoux",
        note: "The fifty letters, in scholarly detail.",
      },
      {
        title: "Introduction to Sanskrit, Part One",
        author: "Thomas Egenes",
        via: "I bet you've now realised",
        note: "You have to learn Sanskrit.",
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
    label: "Trika, Kaula and the corpus",
    lead: "The traditional texts themselves.",
    tone: "#c79b3b",
    books: [
      {
        title: "Yogasūtrabhāṣyavivaraṇa of Śaṅkara",
        author: "T. S. Rukmani",
        note: "Patañjali's Yoga Sūtra, with traditional commentary.",
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
    label: "Hatha yoga texts",
    lead: "The traditional sources for physical yoga: asana and the rest.",
    tone: "#8f8a74",
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
    label: "Traditional medicine",
    tone: "#6e5a8f",
    books: [
      {
        title: "Ayurveda & Acupuncture",
        author: "Frank Ros",
        note: "Indian traditional medicine.",
      },
      {
        title: "Aṣṭāṅga Hṛdayam",
        author: "Vāgbhaṭa, translated by K. R. Srikantha Murthy",
        note: "The heart of the eight branches. The classical text itself.",
      },
      {
        title: "The Web That Has No Weaver",
        author: "Ted J. Kaptchuk",
        note: "Chinese traditional medicine.",
      },
    ],
  },
];

export const around: Chain[] = [
  {
    label: "Body and breath",
    tone: "#7d8f5a",
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
    label: "History",
    tone: "#8a6a4a",
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
    label: "Myth",
    tone: "#9c5a6e",
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
    label: "Mind and meditation",
    tone: "#5f7f8f",
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
