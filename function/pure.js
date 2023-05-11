let point = {
  x: 20,
  y: 90,
};
console.log(point);

// it's not pure function.
// becasue it's change original object.
function pure(point) {
  point.x = 100;
  point.y = 20;
  console.log(point);
}
pure(point);
console.log(point);

// pure function
function sqr(n) {
  return n * n;
}
console.log(sqr(3));
