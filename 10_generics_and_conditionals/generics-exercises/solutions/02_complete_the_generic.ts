// Type this properly - it should be using a generic.

function createPair<typeX, typeY>(x: typeX, y: typeY) {
  return [x, y];
}

console.log(createPair<string, number>("Meaning", 42));
