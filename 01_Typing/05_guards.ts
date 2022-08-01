{
  const printNumberLength = (num: string | number) => {
    if (typeof num === "string") {
      return num.length;
    } else {
      return num.toString().length;
    }
  };

  const textNumber = "077123123123";
  const numberNumber = 45235235;

  console.log(printNumberLength(textNumber));
  console.log(printNumberLength(numberNumber));
}
