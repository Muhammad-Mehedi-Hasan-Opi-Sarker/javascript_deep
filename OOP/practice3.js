class Add {
  constructor(name) {
    this.name = name;
    this.outlook = function () {
      console.log("Outlook in construtor");
    };
  }
}

(Add.prototype.draw = function () {
  console.log("faka");
  this.outlook();
}),
  (Add.prototype.toString = function () {
    return `My name is ${this.name}`;
  });

const result = new Add("Opi");
const result2 = new Add("Hello ");

for (const i in result) {
  console.log(i);
}

// const proto = Object.getPrototypeOf(result)
// console.log(proto)

/* Add.prototype.PI = 3.1416;
Add.prototype.newMethod = function(adds){
    return adds + 5;
}
const myMake = new Add("Opi Sarker");
console.log(myMake.newMethod(5)) */

/* console.log(result);
console.log(result.PI);
console.log(result2);
 */

/* const person = {
    name: "Mehedi Hasan Opi"
}
let result = Object.getPrototypeOf(person)
console.log(result) */
/* let descriptor = Object.getOwnPropertyDescriptor(person, 'name')
console.log(descriptor)

Object.defineProperty(person, 'name',{
    enumerable: false,
    writable: false,
    configurable: false
}) */
