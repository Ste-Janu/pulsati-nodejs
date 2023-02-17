const { Produto } = require("../Model/Produto");

exports.createProduto = async (req, res)=> {
    const {nome, marca, descricao, valor} = req.body;
    const produto = new Produto();
    produto.nome = nome;
    produto.marca = marca;
    produto.descricao = descricao;
    produto.valor = valor;
    await produto.save();
    res.json(produto);
  }

exports.getProduto = async (req, res) =>  {
    const codigo = req.params.codigo;
    const produto = await Produto.findByPk(codigo);
    res.json(produto);
}
exports.updateProduto = async(req, res)=> {
    const codigo = req.params.codigo;
    const produto = await Produto.findByPk(codigo);
    const {nome, marca, descricao, valor} = req.body;
    produto.nome = nome;
    produto.marca = marca;
    produto.descricao = descricao;
    produto.valor = valor;
    await produto.save();
    res.json(produto);
}

exports.deleteProduto= async(req, res) => {
    const codigo = req.params.codigo;
    const produto = await Produto.findByPk(codigo);
    await produto.destroy();
    res.json({ data: 'Produto deletado com sucesso' });
}