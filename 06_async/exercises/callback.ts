import fs from "node:fs";

// The below code swallows the error and doesn't pass it up the chain, make it
// pass the error up the stack using the next callback.

function readFileThenDo(next) {
  fs.readFile("./blah.nofile", (err, data) => {
    next(data);
  });
}

readFileThenDo((data) => {
  console.log(data);
});
