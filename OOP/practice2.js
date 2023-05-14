class Additon {
  constructor(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;

    /*
     ekhane variable use korechi ejonno bind() use korechi.
    ar jodi bind use na korte chai tahole this remove korete hobe
     */
    const add = function () {
      return this.number1 + this.number2;
    }.bind(this);
    const division = function () {
      return this.number1 / this.number2;
    }.bind(this);
    const multipy = function () {
      return this.number1 * this.number2;
    }.bind(this);
    const sub = function () {
      return this.number1 - this.number2;
    }.bind(this);

    this.all = function () {
      const adds = add();
      const divisions = division();
      const multipys = multipy();
      const sums = sub();
      const addall = `Sumation: ${adds} Division: ${divisions} Multipy: ${multipys} Subtract: ${sums}`;
      return addall;
    };
  }
}

const result = new Additon(10, 20);
console.log(result.all());
