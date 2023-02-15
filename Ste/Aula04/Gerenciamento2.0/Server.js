const http = require("http");
const { excluirAeroporto } = require("./Aeroporto");
const { excluirPassageiro } = require("./Passageiros");
const { excluirVoo } = require("./Voo");

const Passageiro = require("./Passageiros").Passageiro;
const Aeroporto = require("./Aeroporto").Aeroporto;
const Voo = require("./Voo").Voo;

const salvarPassageiro = require("./Passageiros").salvarPassageiro;
const salvarAeroporto = require("./Aeroporto").salvarAeroporto;
const salvarVoo = require("./Voo").salvarVoo;

const lerPassageiro = require("./Passageiros").lerPassageiro;
const lerAeroporto = require("./Aeroporto").lerAeroporto;
const lerVoo = require("./Voo").lerVoo;

//criar arquivo passageiro
http
  .createServer((req, res) => {
    if (req.method == "POST") {
      if (req.url.indexOf("/passageiros") >= 0) {
        var body = "";
        req.on("data", function (chunk) {
          body += chunk;
        });
        req.on("end", function () {
          const passageiros = JSON.parse(body);
          const passageiro = new Passageiro(
            passageiros.nome,
            passageiros.codVoo
          );
          console.log(passageiro.getPassageiroNome());
          const passageiroJson = JSON.stringify(passageiro);
          salvarPassageiro(passageiro.nome + ".json", passageiroJson);
          res.writeHead(201, {
            "Content-Type": "application/json",
          });
          res.end(passageiroJson);
        });
      } else {
        res.end("Not found");
      }

      //ler arquivo passageiro
    } else if (req.method == "GET") {
      lerPassageiro("Adriano.json").then((texto) => {
        res.end(texto);
      });

      //atualizar arquivo passageiro
    } else if (req.method == "PUT") {
      if (req.url.indexOf("/passageiros") >= 0) {
        var body = "";
        req.on("data", function (chunk) {
          body += chunk;
        });
        req.on("end", function () {
          const passageiros = JSON.parse(body);
          const passageiro = new Passageiro(
            passageiros.nome,
            passageiros.codVoo
          );
          console.log(passageiro.getPassageiroNome());
          const passageiroJson = JSON.stringify(passageiro);
          salvarPassageiro(passageiro.nome + ".json", passageiroJson);
          res.writeHead(201, {
            "Content-Type": "application/json",
          });
          res.end(passageiroJson);
        });
      }
    }

    //deletar arquivo passageiro
      else if (req.method == "DELETE") {
        if (req.url.indexOf("/passageiros") >= 0) {
          var body = "";
          req.on("data", function (chunk) {
            body += chunk;
          });
          req.on("end", function () {
            const passageiros = JSON.parse(body);
            const passageiro = new Passageiro(
              passageiros.nome,
              passageiros.codVoo
            );
            const passageiroJson = JSON.stringify(passageiro);
            excluirPassageiro(`${passageiro.nome}.json`).then((texto) => {
              res.end(texto);
            });
            res.writeHead(201, {
              "Content-Type": "application/json",
            });
            res.end(passageiroJson);
          });
        }
      } else {
      res.end("Not found");
    }
  })
  .listen(8000, () => console.log("Servidor inicializado na porta 8000"));

//criar arquivo aeroporto
http
  .createServer((req, res) => {
    if (req.method == "POST") {
      if (req.url.indexOf("/aeroporto") >= 0) {
        var body = "";
        req.on("data", function (chunk) {
          body += chunk;
        });
        req.on("end", function () {
          const aeroportos = JSON.parse(body);
          const aeroporto = new Aeroporto(
            aeroportos.cod,
            aeroportos.nome,
            aeroportos.endereco
          );
          console.log(aeroporto.getAeroportoNome());
          const aeroportoJson = JSON.stringify(aeroporto);
          salvarAeroporto(aeroporto.nome + ".json", aeroportoJson);
          res.writeHead(201, {
            "Content-Type": "application/json",
          });
          res.end(aeroportoJson);
        });
      } else {
        res.end(texto);
      }
    } 

    //ler arquivo aeroporto
    else if (req.method == "GET") {
      lerAeroporto("nvt.json").then((texto) => {
        res.end(texto);
      });
    } 
    
    //atualiazar arquivo aeroporto
    else if (req.method == "PUT") {
      if (req.url.indexOf("/aeroporto") >= 0) {
        var body = "";
        req.on("data", function (chunk) {
          body += chunk;
        });
        req.on("end", function () {
          const aeroportos = JSON.parse(body);
          const aeroporto = new Aeroporto(
            aeroportos.cod,
            aeroportos.nome,
            aeroportos.endereco
          );
          console.log(aeroporto.getAeroportoNome());
          const aeroportoJson = JSON.stringify(aeroporto);
          salvarAeroporto(aeroporto.nome + ".json", aeroportoJson);
          res.writeHead(201, {
            "Content-Type": "application/json",
          });
          res.end(aeroportoJson);
        });
      }
    } 
    
    //deletar arquivo aeroporto
    else if (req.method == "DELETE") {
      if (req.url.indexOf("/aeroportos") >= 0) {
        var body = "";
        req.on("data", function (chunk) {
          body += chunk;
        });
        req.on("end", function () {
          const aeroportos = JSON.parse(body);
          const aeroporto = new Aeroporto(
            aeroportos.cod,
            aeroportos.nome,
            aeroportos.endereco
          );
          const aeroportoJson = JSON.stringify(aeroporto);
          excluirAeroporto(`${aeroporto.nome}.json`).then((texto) => {
            res.end(texto);
          });
          res.writeHead(201, {
            "Content-Type": "application/json",
          });
          res.end(aeroportoJson);
        });
      }
    } else {
      res.end("Not found");
    }
  })
  .listen(8001, () => console.log("Servidor inicializado na porta 8001"));

//criar arquivo voo
http
  .createServer((req, res) => {
    if (req.method == "POST") {
      if (req.url.indexOf("/voos") >= 0) {
        var body = "";
        req.on("data", function (chunk) {
          body += chunk;
        });
        req.on("end", function () {
          const voos = JSON.parse(body);
          const voo = new Voo(voos.codVoo, voos.CO, voos.CD, voos.nome);
          console.log(voo.getVooNome());
          const voosJson = JSON.stringify(voos);
          salvarVoo(voo.nome + ".json", voosJson);
          res.writeHead(201, {
            "Content-Type": "application/json",
          });
          res.end(voosJson);
        });
      } else {
        res.end(texto);
      }
    } 
    
    //ler arquivo voo
    else if (req.method == "GET") {
      lerVoo("GOL.json").then((texto) => {
        res.end(texto);
      });
    }

    //atualizar arquivo voo
    if (req.method == "PUT") {
      if (req.url.indexOf("/voos") >= 0) {
        var body = "";
        req.on("data", function (chunk) {
          body += chunk;
        });
        req.on("end", function () {
          const voos = JSON.parse(body);
          const voo = new Voo(voos.codVoo, voos.CO, voos.CD, voos.nome);
          console.log(voo.getVooNome());
          const voosJson = JSON.stringify(voos);
          salvarVoo(voo.nome + ".json", voosJson);
          res.writeHead(201, {
            "Content-Type": "application/json",
          });
          res.end(voosJson);
        });
      }
    } 
    
    //deletar arquivo voo
    else if (req.method == "DELETE") {
      if (req.url.indexOf("/voos") >= 0) {
        var body = "";
        req.on("data", function (chunk) {
          body += chunk;
        });
        req.on("end", function () {
          const voos = JSON.parse(body);
          const voo = new Voo (voos.codVoo, voos.CO, voos.CD, voos.nome);
          const vooJson = JSON.stringify(voo);
          excluirVoo(`${voo.nome}.json`).then((texto) => {
            res.end(texto);
          });
          res.writeHead(201, {
            "Content-Type": "application/json",
          });
          res.end(vooJson);
        });
      }
    }
    else {
      res.end("Not found");
    }
  })
  .listen(8002, () => console.log("Servidor inicializado na porta 8002"));
