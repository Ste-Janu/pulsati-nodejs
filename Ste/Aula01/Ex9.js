const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('Digite um numero ', n1 => {
        console.log("Resultado = ", Math.sqrt(n1))
        readline.close();
});
















