const readline1 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline1.question('Digite uma palavra ', palavra => {
        palavra.reverse((a, b) => {
        return a.localeCompare(b);
    })
        if (a == b) {
            console.log("Essa string é palindromo")
        } else{
            console.log("Essa string não é um palindromo")
        }
    readline1.close();  
});

