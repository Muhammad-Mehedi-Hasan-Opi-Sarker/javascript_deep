function sum(a, b) {
  return a + b;
}

function add(a, b, func) {
  const c = a + b;
  const d = a - b;
  return function () {
    const add2 = func(a, b);
    const multi = c * d * add2;
    return multi;
  };
}

const result = add(3, 4, sum);
console.log(result());

/* 

Higher Order Function

1. We can pass function as an arguments
2. We can return functions from another function

*/
