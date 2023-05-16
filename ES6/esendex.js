/* let obj = {
    name: 'Opi',
    print: function(){
        setTimeout(()=>{
            console.log(this)
            console.log(`hello, ${this.name}`)
        }, 1000)
    }
}
obj.print(); */

// rest operator
const sum = (...rest) => {
  let total = 0;
   rest.forEach((sum) => {
    total +=sum;
    return total;
  });
};

const varr = sum(1, 2, 3, 4, 5);

// speard operator
const obj = {
    a:2,
    b:3,
    c:6
}
const obj2 ={...obj}

// destructuring of object
const person ={
    name: 'Opi',
    email: 'opisarker99.com'
}
const {name, email} = person

// destructuring of array
const array = [2,3,4,54,5,6]
cont [a,b,c,d] = array
console.log(a,b,c,d)

