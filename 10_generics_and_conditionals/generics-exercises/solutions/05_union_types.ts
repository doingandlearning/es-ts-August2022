function f(a: string, b: string): string;
function f(a: number, b: number): number;
function f(a: string | number, b: string | number): string | number {
  if (typeof a === "string") {
    return a + ":" + b;
  } else {
    return (a as number) + (b as number);
  }
}

f(2, 3); // correct usage
f(1, "a"); // should be error
f("a", 2); // should be error
f("a", "b"); // correct usage
