class Information{
    constructor(name, address){
        this.name = name
        this.address = address

        this.submit = function(){
            return this.print();
        }

        this.print = function(){
            const home = `Her name is ${this.name} and he from ${this.address}`;
            return home;
        }
    }
}

const result = new Information('Mehedi', 'Sirajganj, Bangladesh');
console.log(result.submit())