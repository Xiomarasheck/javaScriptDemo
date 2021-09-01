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