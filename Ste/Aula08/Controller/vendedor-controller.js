const { Vendedor } = require("../Model/Vendedor");

exports.createVendedor = async (req, res)=> {
    const {nome, cpf, telefone, endereco} = req.body;
    const vendedor = new Vendedor();
    vendedor.nome = nome;
    vendedor.cpf = cpf;
    vendedor.telefone = telefone;
    vendedor.endereco = endereco;
    await vendedor.save();
    res.json(vendedor);
  }

exports.getVendedor = async (req, res) =>  {
    const codigo = req.params.codigo;
    const vendedor = await Vendedor.findByPk(codigo);
    res.json(vendedor);
}
exports.updateVendedor = async(req, res)=> {
    const codigo = req.params.codigo;
    const vendedor = await Vendedor.findByPk(codigo);
    const { nome, cpf, telefone, endereco} = req.body;
    vendedor.nome = nome;
    vendedor.cpf = cpf;
    vendedor.telefone = telefone;
    vendedor.endereco = endereco;
    await vendedor.save();
    res.json(vendedor);
}

exports.deleteVendedor= async(req, res) => {
    const codigo = req.params.codigo;
    const vendedor = await Vendedor.findByPk(codigo);
    await vendedor.destroy();
    res.json({ data: 'Vendedor deletado com sucesso' });
}