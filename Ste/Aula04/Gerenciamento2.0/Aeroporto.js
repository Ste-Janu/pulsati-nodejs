class Aeroporto {
    cod;
    nome;
    endereco;
    constructor(cod, nome, endereco) {
        this.cod = cod;
        this.nome = nome;
        this.endereco = endereco;
    }
    
    static addAeroporto(cod, nome,endereco){
        let add = new Aeroporto(cod, nome, endereco);
        return add;
    }
    getAeroportoNome() {
        return `${this.cod} ${this.nome} ${this.endereco}`;
  }
} 
const fs = require('fs');
    exports.salvarAeroporto = (nomeArquivo, texto) => {
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
exports.lerAeroporto = (nomeArquivo) => {
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

exports.excluirAeroporto = (nomeArquivo) => {
  const promessa = new Promise((reject) => {
    fs.unlink(nomeArquivo, (erro) => {
      if (erro) {
        reject(erro);
      } else {
        console.log("Arquivo deletado!");
      }
    });
  });
  return promessa;
};
exports.Aeroporto=Aeroporto;
