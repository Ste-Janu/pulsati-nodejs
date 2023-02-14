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





class Menu {
    exebirMenu(){
        readline.question("O que você deseja fazer? (1)Adicionar Passageiros (2)Adicionar Voo (3) Adicionar Aeroporto ", 
        escolha => {
            if (escolha=="1") {
               readline.question("Nome passageiro ", 
                    nome => { readline.question("Cód do voo ", codVoo => {
                        let passageiro = new Passageiros(nome,codVoo);
                        const passageiroJson = JSON.stringify(passageiro)
                        salvarPassageiro(nome +'.json', passageiroJson)
                        new Menu().exebirMenu();
                    });
                });
            } else if (escolha == "2"){
                readline.question("Codigo aeroporto ", 
                    cod => { readline.question("Nome aeroporto ", 
                        nome => { readline.question("Endereço ", endereco => {
                            let aaa = new Aeroporto(cod, nome, endereco)
                            const aaaJson = JSON.stringify(aaa)
                            salvarVoo(nome +'.json', aaaJson)
                            new Menu().exebirMenu();
                        });
                    });
                });
            } else if (escolha=="3"){
                readline.question("Codigo voo ", 
                    codVoo => { readline.question("Cod aero origem ", 
                        CO => { readline.question("Cod aero destino ", 
                            CD => { readline.question("Nome empresa aérea ", nome => {
                                let vvv = new Voo(codVoo,CO,CD,nome)
                                const vvvJson = JSON.stringify(vvv)
                                salvarVoo(nome +'.json', vvvJson)
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


