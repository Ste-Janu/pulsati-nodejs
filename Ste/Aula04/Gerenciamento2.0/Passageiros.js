class Passageiros {
  passageiros = [];

  addPassageiro(nome, codVoo) {
    this.passageiros.push(new Passageiro(nome, codVoo));
  }
}

class Passageiro {
    nome;
    codVoo;

    constructor(nome, codVoo) {
        this.nome = nome;
        this.codVoo = codVoo;
    }

    /*static addPassageiros(nome, codVoo){
        let add = new Passageiros(nome,codVoo);
        return add;
    }*/

    getPassageiroNome() {
        return `${this.nome} ${this.codVoo}`;
  }
}
const fs = require('fs');
    exports.salvarPassageiro = (nomeArquivo, texto) => {
        const promessa = new Promise((resolve, reject) => {
          setTimeout(() => {
            fs.writeFile(nomeArquivo, texto, (erro) => {
              if (erro) {
                reject(erro);
              } else {
                resolve();
              }
            });
          }, Math.random(3));
        });
        return promessa;
      }

exports.lerPassageiro = (nomeArquivo) => {
  const promessa = new Promise((resolve, reject) => {
    fs.readFile(nomeArquivo, 'utf-8', (erro, texto) => {
    if (erro) {
      reject(erro);
    } else {
      resolve(texto);
    }
    })
  });
  return promessa;
}

exports.Passageiro=Passageiro;
exports.Passageiros=Passageiros;


