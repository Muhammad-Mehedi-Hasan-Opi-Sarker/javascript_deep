class Rectangle {
    constructor(width,height){
        this.width = width
        this.height = height
    }
    name = 'Opi Sarker'
    all(){
        console.log(`your height is ${this.height} cm and width ${this.width} cm`)
    }

}

const result =  new Rectangle(170, 16)
console.log(result)