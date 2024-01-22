import { sealed } from "./sealed";

describe("decorator-sealed", () => {
  it("should be sealed", () => {
    @sealed
    class Greeter {
      greeting: string;
      sealed: boolean = false;
      constructor(message: string) {
        this.greeting = message;
      }
      greet() {
        return "Hello, " + this.greeting;
      }
    }
    expect(Greeter.prototype.sealed).toBe(true);
  });

  it("should not be sealed", () => {
    class Greeter {
      greeting: string;
      sealed: boolean = false;
      constructor(message: string) {
        this.greeting = message;
      }
      greet() {
        return "Hello, " + this.greeting;
      }
    }
    expect(Greeter.prototype.sealed).toBeUndefined();
  });
});
