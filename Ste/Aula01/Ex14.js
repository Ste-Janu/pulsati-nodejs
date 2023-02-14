//Cria a readline
const readline1 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
  
  let ListaDePalavras = []; //Lista
  
  const ChamarAReadLine = function () {
    readline1.question(
      "Informe um nome (Para sair informe 'sair'): ",
      function (answer) {
          //Modulo para sair do loop e executar funcao final
        if (answer == "sair") {
            ListaDePalavras.reverse((a, b) => {
                return a.localeCompare(b);
            })
          console.log(ListaDePalavras);
          return readline1.close();
        }
       
        ListaDePalavras.push(answer);
        ChamarAReadLine(); //chamar novamente a mesma função lá em cima;
        
      }
    );
  };
  
  ChamarAReadLine(); // executar a funcao, iniciar.