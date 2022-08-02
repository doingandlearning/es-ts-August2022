import fs from "node:fs";
import zlib from "node:zlib";

// Load a file from disk using readFile and then compress it using the async
// zlib node library, use a promise chain to process this work.

// Once your code is passing, think about where TypeScript can add type-safety.
// Which arguements, return types, etc would you type?
// Look at the type definitions of the Node methods/libraries to help.

// TODO: Rewrite this as an async/await function
function zlibPromise(data) {
  return new Promise((resolve, reject) => {
    zlib.gzip(data, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });
}

// TODO: Rewrite this as an async/await function
function readFile(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

// TODO: Rewrite this as an async/await function
readFile("./support/demofile.txt", "utf-8")
  .then((data) => zlibPromise(data))
  .then((result) => console.log(result)); // --> Load it then zip it and then print it to screen
