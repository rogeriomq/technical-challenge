export class UnexpectedStatusError<P> extends Error {
  private payload
  constructor(message: string, payload?: P) {
    super(message)
    this.payload = payload
    Object.setPrototypeOf(this, UnexpectedStatusError.prototype)
  }
}
