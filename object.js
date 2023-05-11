/* let list = {
    name: "Opi",
    age: 34,
}

list.education = "BBA";
const obj = Object();
obj.session = 2021,
console.log(obj)
 */

const point = {
    x: 90,
    y:23,
    z:10,
}
point.x = 1
point['y'] = 24
const update = 'z'
point[update] = 100
delete point[update]
console.log(point)

// console.log(point.x + point.z)
// console.log(point['z'])
// const search = 'y';
// console.log(point[search])