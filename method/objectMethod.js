const point = {
    x: 90,
    y:23,
    z:10,
}

// console.log(Object.keys(point))
// console.log(Object.values(point))

const newObject = Object.assign({}, point);
newObject.x = 50
console.log(point)
console.log(newObject)