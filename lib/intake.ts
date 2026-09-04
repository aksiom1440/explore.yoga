/** Source of truth for the forming group. Keep the numbers in copy.md in sync. */

export const PROGRAM_NAME = "Yoga Teacher Training";
export const GROUP_SIZE = 12;
export const PLACES_LEFT = 12;
export const PRICE_EUROS = 2900;

export function priceLine(amount = PRICE_EUROS): string {
  return `${amount.toLocaleString("en-GB")} euros`;
}

const WORDS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
] as const;

function word(n: number): string {
  return WORDS[n] ?? String(n);
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function formingLine(
  size = GROUP_SIZE,
  left = PLACES_LEFT,
): string {
  if (left <= 0) return "This group is full. The next one is opening.";
  if (left >= size) return `A group of ${word(size)} is forming.`;
  if (left === 1) return "One place left in the group that's forming.";
  return `${cap(word(left))} places left in the group that's forming.`;
}

export const formNote = [
  "I will email you how the training works, and the weekly live day and time.",
  "This form does not reserve a place. You decide after that email.",
  "The group starts when twelve people have taken a place.",
] as const;

export const formSuccess =
  "I will email you how the training works, and the weekly live day and time.";
