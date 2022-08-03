import * as Rx from "rxjs";

const testData: string[] = [
  "people",
  "planets",
  "species",
  "vehicles",
  "starships",
];

const searchBox = document.querySelector("#search") as HTMLInputElement;
const results = document.querySelector("#results") as HTMLUListElement;

const sendRequest = (arr: string[], query: string) => {
  return arr.filter((item) => {
    return query.length > 0 && item.startsWith(query);
  });
};

const appendResults = (container: HTMLElement, results: string[]) => {
  for (const result of results) {
    const li = document.createElement("li");
    const text = document.createTextNode(result);
    li.appendChild(text);
    container.appendChild(li);
  }
};

const cleanUpUtil = (container: HTMLElement) => {
  while (container.childElementCount > 0) {
    container.removeChild(container.firstChild!);
  }
};
const notEmpty = (input: string) => input && input.trim().length > 0;

Rx.Observable.fromEvent(searchBox, "keydown")
  .pluck("target", "value")
  .filter(notEmpty)
  .do((query: string) => {
    console.log(`Querying for ${query}`);
  });
