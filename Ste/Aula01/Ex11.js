const readline1 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
  
  let numeros = []; //Lista
  var soma = 0;
  
  const ChamarAReadLine = function () {
     readline1.question(
      "Informe um nome (Para sair informe 'sair'): ",
      function (answer) {
          //Modulo para sair do loop e executar funcao final
        if (answer == "sair") {
            numeros.push(answer);
            for(var i = 0; i < numeros.length; i++) {
                soma = soma + numeros[i];
            }
          console.log(soma);
          return readline1.close();
        }
        ChamarAReadLine(); //chamar novamente a mesma função lá em cima;
      }
    );
  };
ChamarAReadLine(); // executar a funcao, iniciar.






/*var arr = [];
var soma = 0;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('Quantos numeros quer digitar ', vezes => {
    parseInt(vezes)
    readline.question("Digite um numero " , numeros => {
        do {
            arr.push(parseInt(numeros));
           } while (arr.length!=vezes);           
           for(var i = 0; i < arr.length; i++) {
               soma += arr[i];
           }
           console.log("Media dos números digitados é ", soma/vezes)
        readline.close();
    });
});
*/



