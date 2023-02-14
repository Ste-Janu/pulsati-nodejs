const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
let cont = 0

readline.question('Que numero deseja verificar? ', n1 => {
    for (let index = 0; index <= n1; index++) {
        if ((n1%index) == 0) 
        cont = cont + 1;  
    }
    if (cont==2) {
        console.log(n1, 'é primo')
    } else {
        console.log(n1, 'não é primo')
    } 
    readline.close();
  });


 