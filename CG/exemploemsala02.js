
var minhabiblioteca = require("./exemplomodule");

var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(minhabiblioteca.primeironome);
    res.write(minhabiblioteca.sobrenome);
    res.write(minhabiblioteca.codigomatricula);
    res.end();

}).listen(8080); 

console.log( minhabiblioteca.primeironome );
console.log( minhabiblioteca.sobrenome );
console.log( minhabiblioteca.codigomatricula );