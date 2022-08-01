import assert from "node:assert";

// npm init -y
// npm install @types/node

// This will process a string and will capitalize the first letter of each word
// but will make all the other letters lowercase.
function toTitleCase() {}

assert.equal(toTitleCase("war AND peace"), "War And Peace");
assert.equal(toTitleCase("Catcher in the Rye"), "Catcher In The Rye");
assert.equal(toTitleCase("tO kILL A mOCKINGBIRD"), "To Kill A Mockingbird");
console.log("toTitleCase passes.");

// This will count the number of separate words within a string. Words are
// delimited by spaces, dashes (-), or underscores (_).
function countWords() {}

assert.equal(countWords("War and Peace"), 3);
assert.equal(countWords("catcher-in-the-rye"), 4);
assert.equal(countWords("for_whom the-bell-tolls"), 5);
console.log("countWords passes.");

// This will return all the words that are within a string. Words are delimited
// by spaces, dashes (-), or underscores (_).
function toWords() {}

assert.deepEqual(toWords("War and Peace"), ["War", "and", "Peace"]);
assert.deepEqual(toWords("catcher-in-the-rye"), [
  "catcher",
  "in",
  "the",
  "rye",
]);
assert.deepEqual(toWords("for_whom the-bell-tolls"), [
  "for",
  "whom",
  "the",
  "bell",
  "tolls",
]);
console.log("toWords passes.");

// This will take a string and a number and return that same string repeated
// that number of times.
function repeat(input: string, times: number): string {
  // create a new array that with length of `times`
  // and set each element to the value of the `input` string
  const instances = new Array(times).fill(input);
  // join the elements of the array together
  const result = instances.join("");
  return result;
}

assert.strictEqual(repeat("War", 3), "WarWarWar");
assert.strictEqual(repeat("rye", 1), "rye");
assert.strictEqual(repeat("bell", 0), "");
console.log("repeat passes.");

// This will return true if the string only has alpha characters (that is,
// letters). Test cases for this function are as follows:
function isAlpha(input: string): boolean {
  // regex that will match any string that only has upper and lowercase letters
  const alphaRegex = /^[a-z]*$/i;
  // test our input using the regex
  const result = alphaRegex.test(input);
  return result;
}

assert.strictEqual(isAlpha("War and Peace"), false);
assert.strictEqual(isAlpha("Atonement"), true);
assert.strictEqual(isAlpha("1Q84"), false);
console.log("isAlpha passes.");

// This will return true if the string is blank, that is, consists only of
// whitespace characters.
function isBlank(input: string): boolean {
  // test if the first character of our input is an empty space
  while (input[0] === " ") {
    // successively slice off the first character of the input
    input = input.slice(1);
  }
  // the loop will stop on the first character that is not a space.
  // if we're left with an empty string, we only have spaces in the input
  const result = input === "";
  return result;
}

assert.strictEqual(isBlank("War and Peace"), false);
assert.strictEqual(isBlank("         "), true);
assert.strictEqual(isBlank(""), true);
console.log("isBlank passes.");
console.log("All tests passed.");
