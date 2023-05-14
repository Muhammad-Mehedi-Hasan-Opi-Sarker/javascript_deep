const point = {
    x: 90,
    y:23,
    z:10,
}
console.log('x' in point)

for(let value in point){
    console.log(value,':',point[value])
}