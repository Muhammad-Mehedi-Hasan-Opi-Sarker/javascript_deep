let rect = function (name, height, width) {
  return {
    height: height,
    width: width,
    name: name,
   /*  draw: function () {
      return this.properties();
    }, */
    properties: function () {
      const user = `${this.name} height is ${this.height} cm and width ${this.width} cm`;
      return user;
    },
  };
};

const result = rect("Hasan", 10, 20);
const result2 = rect("Muhammad Mehedi Hasan Opi", 180, 20);
console.log(result.properties());
console.log(result2.properties());
