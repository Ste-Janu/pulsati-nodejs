const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um numero: ', num => {
    if (num%2 == 0){
        console.log("Numero par")
    } else{
        console.log("Numero impar")
    }
    readline.close();
  });