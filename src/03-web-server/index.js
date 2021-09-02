//npm i express
const http = require('http')

// emisor de eventos => request 
//const server = http.createServer((req, res) => {
//    res.end("Holaaaa")
//});

const requestListener = ((req, res) => {
    res.write("holaaaaaa");
    res.end();
});

const server = http.createServer();
server.on('request', requestListener);


server.listen(4242, () => {
    console.log("server is running...")
})