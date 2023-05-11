// First Class Function example

const add = function (a,b){
    return a+b;
}
const sum = add;
const result = sum(3,3)
// console.log(result)

let arr = [];
arr.push(add);
console.log(arr[0](2,2))


/* 

rule: 
1. A Function can be stored in a variable
2. A Function can be stored in an array
3. A Function can be stored in an object
4. We can create function as need

*/