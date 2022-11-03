export class CountRequests {
  static #instance: CountRequests;
  #totalRequests = 0;
  private constructor() {}

  static get instance() {
    if (!this.#instance) {
      this.#instance = new CountRequests();
    }
    return this.#instance;
  }

  incrementRequests() {
    this.#totalRequests++;
  }

  getRequests(): number {
    return this.#totalRequests;
  }
}
