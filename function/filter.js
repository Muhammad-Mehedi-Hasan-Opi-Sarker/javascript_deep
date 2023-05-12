/* 

This  is filter method. It has two method for filter. 
Number 1 method is javascript built in function.
Number 2 is a made by developer. 
This two way same work but If you need more customize then you should use Number of 2 filter option.

*/

const arr = [2, 3, 4, 5, 6, 7, 8, 9];

// This is built in method 'filter'.
// number 1

/* const result = arr.filter(function (value) {
  if (value > 5) {
    return value;
  }
}); */
// console.log(result)

// number 2
function filter(arr, cb) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
const result2 = filter(arr, function (value) {
  return value % 2 == 0;
});
console.log(result2);
