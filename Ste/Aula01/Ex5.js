const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite uma palavra? ', palavra => {
    let nl = (palavra.length)
    console.log("Numero de letras: ",nl)
    readline.close();
  });