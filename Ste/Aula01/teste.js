var teste1 = 'Teste 1';
let teste2 = 'Teste 2';
const teste3 = 'Teste 3';

console.log(teste1);
console.log(teste2);
console.log(teste3);

console.log('==========================');

let a = '1';
let b = 1;
let c = function() { console.log('a') }

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(a + a);
console.log(b + b);

console.log('==========================');

console.log(a == a);
console.log(b == b);
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);
console.log(a && b);

console.log('==========================');
a = '1';
b = 1;

console.log(!!a);
console.log(!a);
console.log(a == null || a == undefined);
console.log(a == undefined);

console.log('==========================');

function teste19() {
  console.log('funciontion 1');
  a = 'novo a';
  console.log(a);
  console.log(b);
}

let teste20 = function() {
  console.log('function 2');
  console.log(a);
  console.log(b);
}

teste19();
teste20();

console.log('==========================');

let e = 'e';
let obj = { a: 1, b: 2 };
obj['c'] = 3;
obj.d = 4;
obj[e] = 5;
console.log(obj);

console.log('==========================');

function novoUsuario(nome, idade) {
  return {
    dados: {
      nome: nome,
      idade: idade
    },
    setNome: function(novoNome) {
      if (!novoNome) {
        this.dados.nome = novoNome;
      }
    },
    enviarEmail: function() {}
  }
}

const u = novoUsuario('Adriano', 33);
console.log(u);
u.setNome('José');
console.log(u);

console.log('==========================');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Who are you?', name => {
  console.log(`Hey there ${name}!`);
  readline.close();
});