/* 

Here show two way use find method. 
Number 1 method use for find and other find method is made by developer

*/

const arr = [2, 3, 4, 5, 6, 8];

// method 1
const result = arr.find(function (value) {
  if (value == 1) {
    return;
  } else {
  }
});
console.log(result);

// method 2
const index = arr.findIndex((value) => {
  return value == 5;
});
console.log(index);

// find make a function

function find(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i)) {
      return arr[i];
    } else {
      return "not found";
    }
  }
}

console.log(
  find(arr, function (value) {
    if (value == 9) {
      return value;
    }
  })
);
