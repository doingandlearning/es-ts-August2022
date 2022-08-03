// const obj = {
//   name: "Kevin",
//   location: "Northern Ireland",
// };

// console.log(obj?.name?.first);

let word: string | null = null;

const num = 1;

if (num) {
  word = "Hello World";
}

console.log(word.toLowerCase());

function printName(person?: string) {
  if (person) {
    const fullName: string = person;
    console.log(`The name is ${fullName}`);
  }
}
