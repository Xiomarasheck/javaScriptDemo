'use strict' //se define para realizar uso de las buenas practicas en JS
// READ LINE 

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