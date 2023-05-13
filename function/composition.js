/* 

This a example of "composition function".
The parameter of the first function returnsthe second funciton 
called the composition function.

*/

function print(n) {
  console.log(n);
}
function multiply(n) {
  return n * 5;
}
function add(a, b) {
  return a + b;
}

print(multiply(add(3, 5)));
