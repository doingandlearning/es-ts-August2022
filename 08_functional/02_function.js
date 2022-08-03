() => { };
(a = 5) => a;
function overload(value) {
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
