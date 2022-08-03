function identityNumber(x: number): number {
  return x;
}

function identityString(x: string): string {
  return x;
}

function identityAny(x: any): any {
  return x;
}

function identity<T>(x: T): T {
  return x;
}

const test = "this is a string";

let hello = identity(test);

const arr = [1, 2, 3];
arr.push("hello");
