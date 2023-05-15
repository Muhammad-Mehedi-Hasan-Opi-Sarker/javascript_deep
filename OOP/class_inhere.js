class Person {
    constructor(name, birthYear){
        this.name = name;
        this.birthYear = birthYear;
    }

    calculateAge(){
        return 2030- this.birthYear;
    }
}

const mizan = new Person("Mizan", 1980);
// console.log(mizan);

class Student extends Person {}
const student = new Student("Opi", 23);
console.log(student.calculateAge())