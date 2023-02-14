class Voo {
    codVoo;
    CO;//codigo da origem 
    CD;//codigo do destino
    nome;//nome empresa aérea
    constructor(codVoo,CO,CD,nome) {
        this.codVoo = codVoo;
        this.CO = CO;
        this.CD = CD;
        this.nome = nome;
    }
    static addVoo(codVoo,CO,CD,nome){
        let add = new Voo(codVoo,CO,CD,nome);
        return add;
    }
    
    getVooNome() {
        return `${this.codVoo} ${this.CO} ${this.CD} ${this.nome}`;
    }
}
const fs = require('fs');
    exports.salvarVoo = (nomeArquivo, texto) => {
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
exports.Voo=Voo