const { Autores } = require("../Model/autores");

exports.createAutor = async (req, res)=> {
    const { nome, sobrenome, dataNasc} = req.body;
    const autor = new Autores();
    autor.nome = nome;
    autor.sobrenome = sobrenome;
    autor.dataNasc = dataNasc;
    await autor.save();
    res.json(autor);
  }

exports.getAutor = async (req, res) =>  {
    const codigo = req.params.codigo;
    const autor = await Autores.findByPk(codigo);
    res.json(autor);
}
exports.updateAutor = async(req, res)=> {
    const codigo = req.params.codigo;
    const autor = await Autores.findByPk(codigo);
    const { nome, sobrenome, dataNasc } = req.body;
    autor.nome = nome;
    autor.sobrenome = sobrenome;
    autor.dataNasc = dataNasc;
    await autor.save();
    res.json(autor);
}

exports.deleteAutor= async(req, res) => {
    const codigo = req.params.codigo;
    const autor = await Autores.findByPk(codigo);
    await autor.destroy();
    res.json({ data: 'Autor deletado com sucesso' });
}