import fs from "node:fs";

// The below code swallows the error and doesn't pass it up the chain, make it
// pass the error up the stack using the next callback.

// Once your code is passing, think about where TypeScript can add type-safety.
// Which arguements, return types, etc would you type?
// Look at the type definitions of the Node methods/libraries to help.

function readFileThenDo(next: Parameters<typeof fs.readFile>[1]) {
  fs.readFile("./blah.nofile", next);
}

// function readFileThenDo(
//   next: (err: NodeJS.ErrnoException | Buffer) => void
// ) {
//   fs.readFile("./blah.nofile", (err, data) => {
//     if (err) {
//       next(err);
//     }
//     next(data);
//   });
// }

readFileThenDo((data) => {
  console.log(data);
});
