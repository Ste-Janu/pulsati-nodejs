const http = require('http');
const Passageiro = require('./Passageiros').Passageiro;
const salvarPassageiro = require('./Passageiros').salvarPassageiro;

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

