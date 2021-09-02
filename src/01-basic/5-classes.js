// definición 
class Person {
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(`Hola Mundo ${this.name}`)
    }
}

class Student extends Person {
    constructor(name, level) {
        super(name)
        this.level = level
    }
    greet() {
        console.log(`Hola Mundo ${this.name} from ${this.level}`)
    }
}

//instancia 
const person1 = new Person("xiom")
const student = new Student("Andres", "primer grado")

//llamado 
person1.greet()
student.greet()