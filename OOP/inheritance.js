/* 

ekhane je code gulo ache se gulo inheretance.
mane ehankar code gulo ektar sathe arektar sathe kivabe add kora jabe. 

*/

class Shape {
  constructor(color) {
    this.color= color;
  }
}
class Circel extends Square {
  constructor(width, color) {
    super(width, color)
    
  }
}

Circel.prototype.common = function () {
  console.log("This is a Circel");
};

class Square extends Shape {
  constructor(width, color) {
    super(color); // this function must need for call.
    this.width = width;
  }
}

Square.prototype.draw = function () {
  console.log("This is a draw");
};

const shape = new Shape();
const circel = new Circel();
const result = new Square(40, 'green');
