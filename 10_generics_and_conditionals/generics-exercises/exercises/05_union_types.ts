// Source: https://dev.to/macsikora/series/4717

function f(a: string | number, b: string | number) {
  if (typeof a === "string") {
    return a + ":" + b; // no error but b can be number!
  } else {
    return a + b; // error as b can be number | string
  }
}
f(2, 3); // correct usage
f(1, "a"); // should be error
f("a", 2); // should be error
f("a", "b"); // correct usage
