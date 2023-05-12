/* 

here have two reducer function. one function made by javascript and
other function made by me.
this two function is same purpose.

*/
const arr = [2, 3, 4, 5, 67, 8];

// one way 
const add = arr.reduce((acc, curr) => {
  return acc + curr;
});
// console.log(add);


// other way without method 
function reduce(arr, cb, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

const sum = reduce(arr, function(acc, curr){
    return acc + curr;
},0)

const max = reduce(arr, function(pre, curr){
    const max = Math.max(pre, curr);
    return max;
},0)

console.log(max);
console.log(sum);