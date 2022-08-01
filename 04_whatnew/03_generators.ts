function* fibon() {
  let first = 1,
    second = 1;

  for (;;) {
    let sum = second + first;
    yield `The next value is ${sum}`;
    first = second;
    second = sum;
  }
}

// 1,1, 2, 3, 5, 8, 13, 21
const sequence = fibon();
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
