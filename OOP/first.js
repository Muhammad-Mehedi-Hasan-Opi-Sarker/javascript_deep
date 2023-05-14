class Rect {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
  range() {
    return this.height + this.width;
  }
}

const result = new Rect(10, 20);
console.log(result.area());
console.log(result.range());
