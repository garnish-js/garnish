export class RuntimeException extends Error {
  constructor(message: string = '') {
    super(message);
  }

  public getMessage() {
    return this.message;
  }
}
