var a = 1;
var b = 4; // preference to allow TS to infer types
var c = a + b;
a = Number.MAX_VALUE;
// b = "oops";
console.log(a);
