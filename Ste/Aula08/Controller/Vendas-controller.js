const { Vendas } = require("../Model/Vendas");

exports.createVendas = async (req, res)=> {
    const {codigoV, codigoP, quantidadeVendas} = req.body;
    const venda = new Vendas();
    venda.codigoV = codigoV;
    venda.codigoP = codigoP;
    venda.quantidadeVendas = quantidadeVendas;
    await venda.save();
    res.json(venda);
  }

exports.getVendas = async (req, res) =>  {
    function comparar(a,b) {
    if (a.codigo > b.codigo) return -1;
    if(a.codigo < b.codigo) return 1;
    return 0;
    }
Vendas.findAll().then((result)=> res.json(result.sort(comparar))) }

exports.updateVendas = async(req, res)=> {
    const codigo = req.params.codigo;
    const vendedor = await Vendas.findByPk(codigo);
    const { codigoV, codigoP, quantidadeVendas} = req.body;
    venda.codigoV = codigoV;
    venda.codigoP = codigoP;
    venda.quantidadeVendas = quantidadeVendas;
    await vendedor.save();
    res.json(vendedor);
}

exports.deleteVendas= async(req, res) => {
    const codigo = req.params.codigo;
    const vendedor = await Vendas.findByPk(codigo);
    await vendedor.destroy();
    res.json({ data: 'Venda deletada com sucesso' });
}