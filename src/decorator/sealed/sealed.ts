export function sealed(target: Function) {
  target.prototype.sealed = true;
}

@sealed
export class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return `Hello, ${this.greeting}`;
  }
}
