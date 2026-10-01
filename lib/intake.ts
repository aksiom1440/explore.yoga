/** Source of truth for the forming group. Keep the numbers in copy.md in sync. */

export const PROGRAM_NAME = "Yoga Teacher Training";
export const GROUP_SIZE = 12;
export const PLACES_LEFT = 12;
export const PRICE_EUROS = 2500;
export const ENROL_EUROS = 1000;
export const MONTHLY_EUROS = 380;
export const MONTHS = 5;

function euros(amount: number): string {
  return amount.toLocaleString("en-GB");
}

export function priceLine(): string {
  const total = ENROL_EUROS + MONTHLY_EUROS * MONTHS;
  return `${euros(PRICE_EUROS)} euros at once, or ${euros(total)} in ${word(MONTHS + 1)} payments`;
}

export function paymentLine(): string {
  return `${euros(PRICE_EUROS)} euros at once, or ${euros(ENROL_EUROS)} euros to enrol and then ${euros(MONTHLY_EUROS)} a month for ${word(MONTHS)} months.`;
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
  "I will write back with how the training runs, the day and time of the live sessions, and the earliest date you can start.",
  "Asking reserves nothing and commits you to nothing. You decide after my reply.",
] as const;
