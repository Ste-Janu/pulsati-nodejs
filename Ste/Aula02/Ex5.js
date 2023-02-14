let classes = require('./classe_pessoa_fisica');

class Usuario extends classes.PessoaFisica {
  imprimir() {
    console.log(this.nome, this.sobrenome);
  }
}
let usuario = new Usuario();
usuario.nome = 'Stefani';
usuario.sobrenome= 'Januario';

usuario.imprimir();

classes.PessoaFisica;