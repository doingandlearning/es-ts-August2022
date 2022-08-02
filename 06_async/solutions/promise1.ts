const fs = require("fs");

// Once your code is passing, think about where TypeScript can add type-safety.
// Which arguements, return types, etc would you type?
// Look at the type definitions of the Node methods/libraries to help.

// Optional: Could you use AbortController here? Maybe as a timeout function?

function readFile(filename, encoding) {
  //TODO Create a promise version of the async readFile function
  fs.readFile(filename, encoding, (err, data) => {
    if (err) {
      console.log(err);
    }
    return data;
  });
}

readFile("./support/demofile.txt", "utf-8").then((data) => console.log(data));
