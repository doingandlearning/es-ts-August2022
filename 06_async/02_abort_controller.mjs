import { setTimeout } from "node:timers/promises";

const ac = new AbortController();
const { signal } = ac;
const timeout = setTimeout(1000, "will NOT be logged", { signal });

setImmediate(() => {
  ac.abort();
});

try {
  console.log(await timeout);
} catch (error) {
  console.log(error);
}
