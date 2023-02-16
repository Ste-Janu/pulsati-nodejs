const express = require('express');
const Aeroporto = require('./Aeroporto').Aeroporto;
const EmpresasAereas = require('./EmpreAereas').EmpresasAereas;
const app = express();
app.use(express.json());


const empresas = [];
const aeroportos = [];
let proximocodigo = 1;

//metodos para Aeroportos

app.post('/aeroporto', (req, res) => {
    const {nome} = req.body;
    const aeroporto = new Aeroporto(proximocodigo, nome)
    proximocodigo = proximocodigo +1;
    aeroportos.push(aeroporto)
    res.json(aeroporto)
})

app.get('/aeroporto', (req, res) => {
    res.json(aeroportos)
})

app.put('/aeroporto/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    const aeroporto = aeroportos.find(aeroporto => aeroporto.codigo == codigo);
    const { nome } = req.body;
    aeroporto.nome = nome;
    res.json(aeroporto);
})

app.delete('/aeroporto/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    let posicao;
    aeroportos.forEach((aeroporto, index) => {
        if (aeroporto.codigo == codigo) {
         posicao = index;
        }
    });
    delete aeroportos[posicao];
    res.json({ data: 'Deletado com sucesso' });
})


//metodos para Empresas Aereas

app.post('/empresasaereas', (req, res) => {
    const {nomeE} = req.body;
    const empresa = new EmpresasAereas(proximocodigo, nomeE)
    proximocodigo = proximocodigo +1;
    empresas.push(empresa)
    res.json(empresa)
})

app.get('/empresasaereas', (req, res) => {
    res.json(empresas)
})

app.put('/empresasaereas/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    const empresa = empresas.find(empresa => empresa.codigo == codigo);
    const { nomeE } = req.body;
    empresa.nomeE = nomeE;
    res.json(empresa);
})

app.delete('/empresasaereas/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    let posicao;
    empresas.forEach((empresa, index) => {
        if (empresa.codigo == codigo) {
         posicao = index;
        }
    });
    delete empresas[posicao];
    res.json({ data: 'Deletado com sucesso' });
})

app.listen(8000);