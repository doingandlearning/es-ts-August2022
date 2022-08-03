() => {};

(a = 5) => a;

function overload(name: string): string;
function overload(age: number): string;
function overload(single: boolean): string;
function overload(value: string | number | boolean): string {
  switch (typeof value) {
    case "string":
      return `Hello, my name is ${value}.`;
    case "number":
      return `Hello, my age is ${value}.`;
    case "boolean":
      return `Hello, I ${value ? "am" : "am not"} single.`;
    default:
      throw new Error("Invalid operation.");
  }
}

console.log(overload("Kevin"), overload(39), overload(false));

interface Document {
  createElement(tagName: "div"): HTMLDivElement;
  createElement(tagName: "span"): HTMLSpanElement;
  createElement(tagName: string): HTMLElement;
}

document.body.addEventListener()

new window.document.