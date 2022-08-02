import fetch from "node-fetch";
import { setTimeout } from "node:timers/promises";

const cancelTimeout = new AbortController();
const cancelRequest = new AbortController();

async function timeout(ms) {
  try {
    await setTimeout(ms, () => cancelRequest.abort(), {
      signal: cancelTimeout.signal,
    });
  } catch (error) {
    // ignore rejections
    if (error.name === "AbortError") {
      console.error("Timeout has been cancelled - Request completed ");
    }
  }
}

async function makeRequest() {
  try {
    const response = await fetch("https://swapi.dev/api/people/", {
      signal: cancelRequest.signal,
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("Request Aborted");
    } else {
      console.error(error);
    }
  } finally {
    cancelTimeout.abort();
  }
}

const results = await Promise.race([timeout(1), makeRequest()]);

// console.log(results);

// const delay = (ms, message) =>
//   new Promise((resolve, reject) => setTimeout(() => resolve(message), ms));

// const message = await Promise.race([
//   delay(50000, "Hello"),
//   delay(10000, "It was too late"),
// ]);

// console.log(message);
