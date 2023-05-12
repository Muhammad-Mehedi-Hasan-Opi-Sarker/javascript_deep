/* 

his is a map method. and here has alternative map function. 
This map function made by own developer

*/

const arr = [1, 2, 3, 4, 5];

/* arr.map(function(value){
    console.log(value)
}) */

function map(value, cb) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = cb(value[i], i);
    newArray.push(temp);
  }
  return newArray;
}
const newArray = map(arr, function (value) {
  let newArray = value * value;
  return newArray;
});
console.log(newArray);
