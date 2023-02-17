const { Editoras } = require("../Model/editoras");

exports.createEditora = async (req, res)=> {
    const { nome, CNPJ} = req.body;
    const editora = new Editoras();
    editora.nome = nome;
    editora.CNPJ = CNPJ;
    await editora.save();
    res.json(editora);
  }

exports.getEditora = async (req, res) =>  {
    const codigo = req.params.codigo;
    const editora = await Editoras.findByPk(codigo);
    res.json(editora);
}
exports.updateEditora = async(req, res)=> {
    const codigo = req.params.codigo;
    const editora = await Editoras.findByPk(codigo);
    const { nome, CNPJ} = req.body;
    editora.nome = nome;
    editora.CNPJ = CNPJ;
    await editora.save();
    res.json(editora);
}

exports.deleteEditora= async(req, res) => {
    const codigo = req.params.codigo;
    const editora = await Editoras.findByPk(codigo);
    await editora.destroy();
    res.json({ data: 'Editora deletado com sucesso' });
}