/** Source of truth for the intake and the price. Keep copy.md in sync. */

export const PROGRAM_NAME = "Yoga Teacher Training";
/** Set to false while the next group is full. */
export const INTAKE_OPEN = true;
export const PRICE_EUROS = 2500;
export const ENROL_EUROS = 1000;
export const MONTHLY_EUROS = 380;
export const MONTHS = 5;

export const INSTALMENT_TOTAL = ENROL_EUROS + MONTHLY_EUROS * MONTHS;

export function euros(amount: number): string {
  return amount.toLocaleString("en-GB");
}

export function priceLine(): string {
  return `${euros(PRICE_EUROS)} euros at once, or ${euros(INSTALMENT_TOTAL)} in ${word(MONTHS + 1)} payments`;
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

export function word(n: number): string {
  return WORDS[n] ?? String(n);
}

export function intakeLine(open = INTAKE_OPEN): string {
  return open
    ? "Places are open for the next group."
    : "The next group is full. Ask, and I will tell you when the one after it starts.";
}

export const formNote = [
  "I will write back with how the training runs, the day and time of the live sessions, and the earliest date you can start.",
  "Asking reserves nothing and commits you to nothing. You decide after my reply.",
] as const;
