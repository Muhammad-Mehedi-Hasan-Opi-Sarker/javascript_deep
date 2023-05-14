let rect = {
  height: 20,
  width: 10,
  draw: function () {
    console.log("This is a draw properties");
    this.printproperties();
  },
  printproperties: function () {
    console.log(
      `Hello, you height is ${this.height} centimeters and width ${this.width}`
    );
    let data = `table range of ${this.height + this.width}`;
    return data;
  },
};
rect.height = 170; // update for
// rect.draw();

let another = {
  height: 100,
  width: 50,
  print: rect.printproperties,
};
console.log(another.print());
