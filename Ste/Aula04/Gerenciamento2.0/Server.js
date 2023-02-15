const http = require('http');

const Passageiro = require('./Passageiros').Passageiro;
const Aeroporto = require('./Aeroporto').Aeroporto;
const Voo = require('./Voo').Voo;


const salvarPassageiro = require('./Passageiros').salvarPassageiro;
const salvarAeroporto = require('./Aeroporto').salvarAeroporto;
const salvarVoo = require('./Voo').salvarVoo;



http.createServer((req, res) => {
  if (req.method == 'POST') {
    if (req.url.indexOf('/passageiros') >= 0) {
      var body = "";
      req.on('data', function (chunk) {
        body += chunk;
      });
      req.on('end', function () {
        const passageiros = JSON.parse(body);
        const passageiro = new Passageiro (passageiros.nome, passageiros.codVoo)
        console.log(passageiro.getPassageiroNome());
        const passageiroJson = JSON.stringify(passageiro)
        salvarPassageiro(passageiro.nome +'.json', passageiroJson)
        res.writeHead(201, {
            'Content-Type': 'application/json'
        })
        res.end(passageiroJson);
      });
    } else {
      res.end('Not found');
    }
  } else {
    res.end('Not found');
  }
}).listen(8000, () => console.log('Servidor inicializado na porta 8000'));

http.createServer((req, res) => {
  if (req.method == 'POST') {
    if (req.url.indexOf('/aeroporto') >= 0) {
      var body = "";
      req.on('data', function (chunk) {
        body += chunk;
      });
      req.on('end', function () {
        const aeroportos = JSON.parse(body);
        const aeroporto = new Aeroporto (aeroportos.cod, aeroportos.nome, aeroportos.endereco)
        console.log(aeroporto.getAeroportoNome());
        const aeroportoJson = JSON.stringify(aeroporto)
        salvarAeroporto(aeroporto.nome +'.json', aeroportoJson)
        res.writeHead(201, {
            'Content-Type': 'application/json'
        })
        res.end(aeroportoJson);
      });
    } else {
      res.end('Not found');
    }
  } else {
    res.end('Not found');
  }
}).listen(8001, () => console.log('Servidor inicializado na porta 8001'));

http.createServer((req, res) => {
  if (req.method == 'POST') {
    if (req.url.indexOf('/voos') >= 0) {
      var body = "";
      req.on('data', function (chunk) {
        body += chunk;
      });
      req.on('end', function () {
        const voos = JSON.parse(body);
        const voo = new Voo (voos.codVoo, voos.CO, voos.CD, voos.nome)
        console.log(voo.getVooNome());
        const voosJson = JSON.stringify(voos)
        salvarVoo(voo.nome +'.json', voosJson)
        res.writeHead(201, {
            'Content-Type': 'application/json'
        })
        res.end(voosJson);
      });
    } else {
      res.end('Not found');
    }
  } else {
    res.end('Not found');
  }
}).listen(8002, () => console.log('Servidor inicializado na porta 8002'));


