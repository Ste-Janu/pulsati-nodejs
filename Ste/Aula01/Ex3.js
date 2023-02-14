//Cria a readline
const readline1 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
  
  let ListaDeNomes = []; //Lista
  
  const ChamarAReadLine = function () {
    readline1.question(
      "Informe um nome (Para sair informe 'sair'): ",
      function (answer) {
          //Modulo para sair do loop e executar funcao final
        if (answer == "sair") {
            ListaDeNomes.sort((a, b) => {
                return a.localeCompare(b);
            })
          console.log(ListaDeNomes);
          return readline1.close();
        }
        ListaDeNomes.push(answer);
        ChamarAReadLine(); //chamar novamente a mesma função lá em cima;
        
      }
    );
  };
  
  ChamarAReadLine(); // executar a funcao, iniciar.


  


/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
  let palavras;
  while (palavras!="exit"){
  readline.question('Digite uma palavra ', palavras => {
            let myList = [palavras];
            myList.sort((a, b) => {
                return a.localeCompare(b);
            })
            console.log(myList)
            readline.close();
        });
    }


/*myList = ["test", "JavaScript", "Bootstrap", "C#"]
myList.sort((a, b) => {
    return a.localeCompare(b);
})
console.log(myList)*/