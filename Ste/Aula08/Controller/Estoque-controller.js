const { Estoque } = require("../Model/Estoque");

exports.createEstoque = async (req, res)=> {
    const {codigoP, quantidade} = req.body;
    const estoque = new Estoque();
    estoque.codigoP = codigoP;
    estoque.quantidade = quantidade;
    await estoque.save();
    res.json(estoque);
}

exports.getEstoque = async (req, res) =>  {
    const codigo = req.params.codigo;
    const estoque = await Estoque.findByPk(codigo);
    res.json(estoque);
}

exports.getEstoqueBaixo = async (req, res) => {
   
    Estoque.findAll().then((result)=> 
    res.json(result)
)} 

exports.updateEstoque = async(req, res)=> {
    const codigo = req.params.codigo;
    const estoque = await Estoque.findByPk(codigo);
    const {codigoP, quantidade} = req.body;
    estoque.codigoP = codigoP;
    estoque.quantidade = quantidade;
    await estoque.save();
    res.json(estoque);
}

exports.deleteEstoque= async(req, res) => {
    const codigo = req.params.codigo;
    const estoque = await Estoque.findByPk(codigo);
    await estoque.destroy();
    res.json({ data: 'Estoque deletado com sucesso' });
}