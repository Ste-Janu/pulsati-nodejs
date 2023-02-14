const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('Digite um numero ', n1 => {
    function factorialize(n1) {
        if (n1 < 0) 
            return -1;
        else if (n1 == 0) 
            return 1;
        else {
            return (n1 * factorialize(n1 - 1));
        }
    }
    console.log(factorialize(n1));
    readline.close();
});

