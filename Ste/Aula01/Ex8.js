const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('Digite um numero ', n1 => {
    readline.question('Digite um numero ', n2 => {
        console.log("Resultado = ",parseInt(n1) * parseInt(n2))
        readline.close();
    })
});