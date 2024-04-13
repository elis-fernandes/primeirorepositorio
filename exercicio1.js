// Importação dos módulos 'http' e 'request'
var http = require('http');
var request = require('request');
// Variável global para armazenar o resultado da requisição ao microserviço
var biblioteca = 'nao executado';
// Função que simula o início do sistema da companhia
function inicieSistemaCia() {
return "sistema da companhia (monolito) <br>";
}
// Função que simula a ativação do módulo de catalogo
function acionaModuloCatalogo() {
return "modulo de catalogo (modulo) <br>";
}
// Função que simula a ativação do módulo de reservas
function acionaModuloReservas() {
return "modulo reservas (modulo) <br>";
}
// Função que simula a ativação do moódulo de vendas
function acionaModelodeVendas() {
return "modelo de vendas (modulo) <br>";
}
// Função que simula a ativação do módulo programa de milhagens
function acionaModuloProgramaMilhagens() {
return "modulo programa de milhagens (modulo) <br>";
}
// Função para acionar o microserviço de consulta
function acionaMicroServicoConsulta(callback) {
    // Realiza uma requisição HTTP para o microserviço na porta 8081
    request('http://localhost:8081', function (error, response, body)
// Verifica se a requisição foi bem-sucedida e se o status de resposta é 200
if (!error && response.statusCode === 200) {
// Atualiza a variável global com o corpo da resposta
biblioteca = body;
console.log(body);
// Chama a função de retorno (callback) passando o corpo da resposta como argumento callback(body);
} else {
            // Em caso de erro na requisição, registra o erro no console e chama o callback com null
console.error("Erro ao fazer a requisição ao microserviço:", error);
            callback(null);
        }
}); }
// Criação do servidor HTTP na porta 8080 para lidar com solicitações do cliente
http.createServer(function (req, res) {
// Executa as funções simuladas e concatena os resultados em uma sequência var sequenciaExecucao = inicieSistemaCia() +
      acionaModuloCatalogo()+
      acionaModuloReservas()+
      acionaModuloReservas()+
     acionaModelodeVendas()+
    acionaModuloProgramaMilhagens();
    // Chama a função para acionar o microserviço, passando uma função de callback para lidar com o resultado
acionaMicroServicoConsulta(function (resultadoMicroServico) {
// Adiciona o resultado do microserviço à sequência de execução sequenciaExecucao += resultadoMicroServico;
// Define o cabeçalho da resposta como HTML
res.writeHead(200, {'Content-Type': 'text/html'});
// Escreve a sequência de execução na resposta res.write(sequenciaExecucao);
// Finaliza a resposta
res.end();
});
}).listen(8080); // O servidor está escutando na porta 8080
// Criação de outro servidor HTTP na porta 8081 para lidar com solicitações do microserviço
http.createServer(function (req, res) {
// Define o cabeçalho da resposta como HTML res.writeHead(200, {'Content-Type': 'text/html'});
// Escreve uma mensagem fixa na resposta res.write("microservico de localizacao do ecommerce"); // Finaliza a resposta
res.end();
}).listen(8081); // O servidor do microserviço está escutando na porta 8081
