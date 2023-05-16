/* const num = 50;
if(num>20){
    throw new RangeError("you provide wrong input")
} */

class CustomError extends Error {
  constructor(msg) {
    super(msg)
  }
}

try {
  console.log("hello");
  console.log("hello");
  throw new CustomError("I am in you custom Error");
  console.log("hello");
} catch (e) {
  console.dir(e);
} finally {
  console.log("Not a matter");
}
