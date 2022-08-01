let a: number = 1;
let b = 4; // preference to allow TS to infer types
const c = a + b;

a = Number.MAX_VALUE;
// b = "oops";

console.log(a);

{
  // IIFE -> scope
  // any, void, never
  // Make up our when
  // Four ways -> literal, enum, class, interface
  type Kingdom = "Bacteria" | "Protozoa" | "Chromista";
  let k: Kingdom;
  k = "Protozoa";
  type Arbitrary = "literally this" | 10 | false;
  let r: Arbitrary = false;
  // r = true;
}

{
  // enumeration types
  enum BoxSize {
    Small = "sm0120", // implicitly 0
    Medium = "me121", // implicitly 1
    Large = "la121",
    XLarge = "ty121", // implicitly
  }

  // BoxSize => {"Small": 0, "Medium": 1, 0: "Small", 1: "Medium"}

  console.log(BoxSize.XLarge);
}

{
  // data typing and functions => incoming arguments and return types
  const fn = (x: number): string => {
    return `${x}`;
  };
}

{
  type my_type = boolean | number | string;
  const fn = (): my_type => {
    return 12;
  };
}

{
  // the tuple type
  let names: string[];
  names.push("Heather");
  names.push("Chi");
  let poem: [number, boolean, string];
  poem = [1, true, "love"];
  // poem[0] = "One"
}

{
  // named tuples
  // tuples -> function arguments
  // 	-> spread, liked named
  // type coord = "xcord" number, "ycord": number];
}
