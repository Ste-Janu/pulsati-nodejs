const { Passageiros } = require('./Passageiros');
const { Aeroporto } = require('./Aeroporto');
const { Voo } = require('./Voo');


const salvarPassageiro = require('./Passageiros').salvarPassageiro;
const salvarAeroporto = require('./Aeroporto').salvarAeroporto;
const salvarVoo = require('./Voo').salvarVoo;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


let Passageiro = [];
let Aeros = [];
let Voos = [];

class Menu {
    exebirMenu(){
        readline.question("O que você deseja fazer? (1)Adicionar Passageiros (2)Adicionar Voo (3) Adicionar Aeroporto ", 
        escolha => {
            if (escolha=="1") {
               readline.question("Nome passageiro ", 
                    nome => { readline.question("Cód do voo ", codVoo => {
                        const pppp = new Passageiros(nome,codVoo)
                        salvarPassageiro(nome +'.txt', pppp.getPassageiroNome())
                        Passageiro.push(pppp)
                        new Menu().exebirMenu();
                    });
                });
            } else if (escolha == "2"){
                readline.question("Codigo aeroporto ", 
                    cod => { readline.question("Nome aeroporto ", 
                        nome => { readline.question("Endereço ", endereco => {
                            const aaa = new Aeroporto(cod, nome, endereco)
                            salvarAeroporto(nome +'.txt', aaa.getAeroportoNome())
                            Aeros.push(aaa)
                            new Menu().exebirMenu();
                        });
                    });
                });
            } else if (escolha=="3"){
                readline.question("Codigo voo ", 
                    codVoo => { readline.question("Cod aero origem ", 
                        CO => { readline.question("Cod aero destino ", 
                            CD => { readline.question("Nome empresa aérea ", nome => {
                                const vvv = new Voo(codVoo,CO,CD,nome)
                                salvarVoo(nome +'.txt', vvv.getVooNome())
                                Voos.push(vvv)
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


