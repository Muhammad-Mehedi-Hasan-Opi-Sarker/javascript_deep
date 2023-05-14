class React {
  constructor(height, width, name) {
    this.height = height;
    this.width = width;
    let names = name;
    
    this.getPositon = function(){  // eta  diye baire thekeo access pete pari
        return names;
    }
    
      let properties = function () {
        const user = `${names} height is ${this.height} cm and width ${this.width} cm`;
        return user;
      }.bind(this)
      this.draw = function () {
      return properties();
    }
  }
}

const result = new React(20, 10, "Muhammad Mehedi Hasan Opi Sarker");
console.log(result.draw());
console.log(result.getPositon());
