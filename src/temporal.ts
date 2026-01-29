import { Temporal } from "@js-temporal/polyfill";

export class TemporalDate {
  #date;
  constructor(year: number, month: number, day?: number) {
    this.#date = Temporal.PlainDate.from({
      year,
      month,
      day,
    });
  }

  toString() {
    return this.#date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
}