function first(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}

const result = first(1)(2)(2)(4);
console.log(result);
