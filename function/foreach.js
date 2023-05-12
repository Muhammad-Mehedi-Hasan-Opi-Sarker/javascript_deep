/* 

Here you can see many way to solve forEach method.
Even own made forEach method, it's last

*/

const arr = [23,43,45,56,7];

/* arr.forEach(function(value, index, array){
    console.log(value,index,array)
}) */

/* arr.forEach((value, index, array)=>{
    array[index] = value+5;
})
console.log(arr) */

/* let sum = 0;
arr.forEach((value, index)=>{
    sum +=value;
})
console.log(sum) */

// this foreach method i made it

function foreach(arr, cb){
    for(let i = 0; i<arr.length; i++){
        cb(arr[i], i, arr)
    }
}

foreach(arr, function (value, index, array){
    console.log(value, index, array);
})


