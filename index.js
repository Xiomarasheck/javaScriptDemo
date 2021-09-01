'use strict' //se define para realizar uso de las buenas practicas en JS

//Para importar y utilizar express se debe agregar la siguiente línea de código:
//import { express } from 'express';

const express  =  require('express'); //import express cuando se tenga babel
var zlib = require('zlib');
var http = require("http");
const readline = require('readline');

//crear servidor
const app  =  express();
const  port  =  8082;

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


console.log("-----------------------------------------------");

let y = 0;
app.get('/hola', (req, rest) => {
    for (let i = 0; i < 5; i++) {
        y = i; // Esta y no ha sido declarada si quiera, el alcance de cada variable esta sujeta a los {}, as'i que es undefined
    }
    console.log(y); //error
    rest.send({ message: "Hola Mundo" });
});

console.log(y);

app.get('/hola/:name', (req, rest) => {
    console.log(req.params.name);
    rest.send({ message: `Hola Mundo ${req.params.name}` });
});

app.listen(port,   ()  =>  {    
    console.log(`Server is running on PORT ${port}`);
});


// Arreglos 
console.log("----------------------Arreglos----------------------");
const frutas = ['platano', 'manzana', 'pera'];
frutas.forEach(item => {
    console.log(item);
});


console.log("----------------------Read line----------------------");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
});

console.log("----------------------Read line----------------------");


let x = 1;
x = x + 1;

console.log(x);

let hola = null;
if (hola)
    console.log("dfdfggñlklñdfkflñsdkgdflñkgñfldkgdflgkdflñ");