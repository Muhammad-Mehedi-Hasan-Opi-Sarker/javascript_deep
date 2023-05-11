// This topic is a calback function

function simple(a, b, cb) {
  const c = a + b; //15
  const d = a - b; //5
  const result = cb(c, d); // 15, 5
  return result; // 20
}

function sum(a, b) {
  return a + b;
}
const resultSum = simple(10, 5, sum);
console.log(resultSum);
// resultSum function and sub both same;
const sub = simple(10, 5, function substraction(a, b) {
  return a - b;
});
console.log("Subtraction:", sub);

const multi = simple(5,8, function (a, b) {
  return a * b;
});
console.log(multi);

const division = simple(10, 5, function div(a, b) {
  return a / b;
});
console.log(division);
