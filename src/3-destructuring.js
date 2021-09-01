// UTIL CUANDO SE DESEA USAR PROPÍEDADES DE UNA OBJETO MÁS GRANDE

// const PI = Math.PI 
// const E = Math.E
// const SQRT2 = Math.SQRT2

const { PI, E, SQRT2 } = Math;


// UTILIZANDO EL REQUIRE DE BIBLIOTECAS 
const { readFile } = require('fs');

//FUNCIONA PARA ARGUMENTOS DE UNA FUNCIÓN 

const circle = {
    label: "circle1",
    radius: 2
}

const circleArea = ({ radius }, { precision = 2 } = {}) =>
    (PI * radius * radius).toFixed(precision)

console.log(circleArea(circle))
console.log(circleArea(circle, { precision: 5 }))


//ARREGLOS
const [first, second, , forth] = [10, 20, 30, 40]
const [first2, ...restOfItems] = [10, 20, 30, 40]


//OBJETOS 

const data = {
    temp1: "001",
    temp2: "002",
    firstName: 'hola',
    lastName: "tu"
}

const { temp1, temp2, ...person } = data

const newArray = [...restOfItems]
const newObject = {...person }