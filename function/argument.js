function show (a,b,c){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
         sum = sum +arguments[i];
    }
    return sum;
}
const result =  show(4,5,5,6,6,7,8);
console.log(result)