
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let classes1 = require('./Passageiros').Passageiros;
let classes2 = require('./Aeroporto').Aeroporto;
let classes3 = require('./Voo').Voo;

let listaP = [];
let listaA = [];
let listaV = [];

class Menu {
    exebirMenu(){
        readline.question("O que você deseja fazer? (1)Adicionar Passageiros (2)Adicionar Voo (3) Adicionar Aeroporto ", 
        escolha => {
            if (escolha=="1") {
               readline.question("Nome passageiro ", 
                    nome => { readline.question("Cód do voo ", codVoo => {
                        listaP.push(classes1.addPassageiros(nome, codVoo))
                        console.log(listaP)
                        new Menu().exebirMenu();
                    });
                });
            } else if (escolha == "2"){
                readline.question("Codigo aeroporto ", 
                    cod => { readline.question("Nome aeroporto ", 
                        nome => { readline.question("Endereço ", endereco => {
                            listaA.push(classes2.addAeroporto(cod, nome, endereco))
                            console.log(listaA)
                            new Menu().exebirMenu();
                        });
                    });
                });
            } else if (escolha=="3"){
                readline.question("Codigo voo ", 
                    codVoo => { readline.question("Cod aero origem ", 
                        CO => { readline.question("Cod aero destino ", 
                            CD => { readline.question("Nome empresa aérea ", nome => {
                                listaV.push(classes3.addVoo(codVoo,CO,CD,nome))
                                console.log(listaV)
                                new Menu().exebirMenu();
                            });
                        });
                    });
                });
            }
        });
    }   
} 
new Menu().exebirMenu();


