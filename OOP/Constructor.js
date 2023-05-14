const React = function (height, width) {
  this.height = height;
  this.width = width;
  this.name = name;
  (this.draw = function () {
    return this.properties();
  }),
    (this.properties = function () {
      const user = `${this.name} height is ${this.height} cm and width ${this.width} cm`;
      return user;
    });
};
const result = new React(20, 10);
console.log(result.draw())