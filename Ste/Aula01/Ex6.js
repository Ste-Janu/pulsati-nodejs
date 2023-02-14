
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      readline.question('Que numero deseja a tabuada? ', numero => {
        for (var i = 1; i <11; i++){
            console.log(numero, " x ",i + " = ",(numero*i))
        }
        readline.close();
      });