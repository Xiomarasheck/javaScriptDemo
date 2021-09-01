//LOOPS AND OBJECTS
console.log("----------------------Ciclos Objects----------------------");
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}

const array = [{ "id": 1, "kfk": 3 }, { "id": 2 }, { "id": 3 }];

for (const property in array) {
    console.log(`${property}: ${array[property].a}`);
}

for (let index = 0; index < array.length; index++) {
    console.log(`${index}: ${array[index].a}`);
}

//LOOPS AND ARRAYS
console.log("----------------------Ciclos Arreglos----------------------");

let iterable = [10, 20, 30];
for (let value of iterable) {
    console.log(value);
}
iterable.forEach(element => {
    console.log(element);
});


let result = Object.keys(object).map(function(item) {
    return item;
});
console.log(result);

let resultFilter = array.filter(posicion => posicion.id > 10);
console.log(resultFilter);

let con = true;
let contador = 0;
while (con) {
    console.log("while:" + contador);
    if (contador > 5) {
        con = false;
    }
    contador += 1;
    console.log(contador);
}

let condicional2 = true;
let contador2 = 0;

do {
    contador2 = 1;
    console.log("do:" + contador2);

    if (contador > 5) {
        condicional2 = false;
    }
    contador2 += 1;
    console.log("do:" + contador2);
} while (condicional2);


// Arreglos 
console.log("----------------------Arreglos----------------------");
const frutas = ['platano', 'manzana', 'pera'];
frutas.forEach(item => {
    console.log(item);
});