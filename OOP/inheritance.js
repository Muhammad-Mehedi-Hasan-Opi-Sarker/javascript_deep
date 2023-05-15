/* 

ekhane je code gulo ache se gulo inheretance.
mane ehankar code gulo ektar sathe arektar sathe kivabe add kora jabe. 

*/

class Shape {
  constructor() {}
}

Shape.prototype.common = function () {
  console.log("This is a common");
};

class Square extends Shape {
  constructor(width) {
    super(); // this function must need for call.
    this.width = width;
  }
}

Square.prototype.draw = function () {
  console.log("This is a draw");
};

const shape = new Shape();
const result = new Square(40);
