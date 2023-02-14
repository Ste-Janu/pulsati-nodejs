class Aeroporto {
    cod;
    nome;
    endereco;
    constructor(cod, nome, endereco) {
        this.cod = cod;
        this.nome = nome;
        this.endereco = endereco;
    }
    
    static addAeroporto(cod, nome,endereco){
        let add = new Aeroporto(cod, nome,endereco);
        return add;
    }
}
exports.Aeroporto=Aeroporto;
