// Type this properly - it should be using a generic.

function createPair(x, y) {
  return [x, y];
}

console.log(createPair<string, number>("Meaning", 42));
