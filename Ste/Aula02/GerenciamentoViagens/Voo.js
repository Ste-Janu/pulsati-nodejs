class Voo {
    codVoo;
    CO;//codigo da origem 
    CD;//codigo do destino
    nome;//nome empresa aérea
    constructor(codVoo,CO,CD,nome) {
        this.codVoo = codVoo;
        this.CO = CO;
        this.CD = CD;
        this.nome = nome;
    }
    static addVoo(codVoo,CO,CD,nome){
        let add = new Voo(codVoo,CO,CD,nome);
        return add;
    }
}
exports.Voo=Voo