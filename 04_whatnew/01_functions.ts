const fnA = (x) => x * x;
const fnB = (t) => {
  return t + t;
};

const fnC = (y = 10) => y;

class Demo {
  someMethod() {
    console.log("Hello");
  }
}

const demo1 = new Demo();

demo1.someMethod();
