/* const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "one");
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "two");
});

p1.then((v) => {
  console.log(v);
}).catch((e) => {
  console.log(e.message);
});

p2.then((v) => {
  console.log(v);
}).catch((e) => {
  console.log(e);
});
 */

/* const getCloth = (money) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money) {
        resolve("You can purchase pant");
      } else {
        reject("You can't buy");
      }
    }, 2000);
  });
};
getCloth(false)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
 */

/* const p2 = Promise.resolve("hello");
  p2.then(res=>console.log(res))
  console.log(p2) */

/*   function newPrmise(){
    return Promise.resolve("Test value")
  }
  console.log(newPrmise()) */

/* async function newAsy() {
  return "async funcition hello";
}
console.log(newAsy()); */

async function dataFetch (url){
  let data = await fetch(url);
  let res = await data.json();
  res.map(value =>console.log(value.name))
  
}
dataFetch('https://jsonplaceholder.typicode.com/users')