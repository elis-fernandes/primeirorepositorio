var http = require('http');
var variavelGlobalReutilisavel = "mesmo valor/parametros etc";
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('<html>');
res.write('<body>');
res.write('<h1>Primeiro executável com html embutido/inline</h1>'); res.write('</body>');
res.write('</html>');
res.end();
}).listen(8087);
console.log('Primeiro Programa');
var http = require('http'); //bibliotecas/modules var fs = require('fs'); http.createServer(function (req, res) {
fs.readFile('elisangela-34107088.html', function(err, data) { res.writeHead(200, {'Content-Type': 'text/html'}); res.write(data);
return res.end();
}); }).listen(8088);
