class Passageiros {
    nome;
    codVoo;

    constructor(nome, codVoo) {
        this.nome = nome;
        this.codVoo = codVoo;
    }
    static addPassageiros(nome, codVoo){
        let add = new Passageiros(nome,codVoo);
        return add;
    }


}

exports.Passageiros=Passageiros;


