const arr = [3,4,5,6,76,7,56];
const find = 5;

let isFound = false;

for(let i = 0; i<arr.length; i++){
    if(arr[i]===find){
        isFound = true;
    }
}
if (isFound == true) {
    console.log("Data is", find);
}
else{
    console.log("Data is not found");
}