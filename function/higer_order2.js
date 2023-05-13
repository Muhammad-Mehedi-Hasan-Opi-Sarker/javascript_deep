function number1(b) {
  function number2(c) {
    return b + "," + c;
  }
  return number2;
}

const data = number1("Hello");
console.log(data);
