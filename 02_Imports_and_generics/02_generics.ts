function firstElement(a: Array<any>): any {
  //is Array<any> the same as any[] ?
  return a[0];
}

export function genericFirstElement<T>(a: T[]): T {
  return a[0];
}

const a_s = ["one", "two", "three", "four"];
const a_n = [12, 12, 12, 12];

console.log(firstElement(a_s));
console.log(genericFirstElement<string>(a_s));
console.log(genericFirstElement<number>(a_n));
