const { createEstoque, getEstoque, updateEstoque, deleteEstoque, getEstoqueBaixo } = require('../Controller/Estoque-controller');
const { createProduto, getProduto, updateProduto, deleteProduto } = require('../Controller/Produto-controller');
const { createVendas, getVendas, updateVendas, deleteVendas } = require('../Controller/Vendas-controller');
const { createVendedor, getVendedor, updateVendedor, deleteVendedor } = require('../Controller/vendedor-controller');

const express = require('express');
const app = express();
app.use(express.json());

app.post('/estoque', createEstoque);
app.post('/estoque', getEstoqueBaixo);
app.get('/estoque/:codigo', getEstoque);
app.put('/estoque/:codigo', updateEstoque);
app.delete('/estoque/:codigo', deleteEstoque);

app.post('/produtos', createProduto);
app.get('/produtos/:codigo', getProduto);
app.put('/produtos/:codigo', updateProduto);
app.delete('/produtos/:codigo', deleteProduto);

app.post('/vendas', createVendas);
app.get('/vendas', getVendas);
app.put('/vendas/:codigo', updateVendas);
app.delete('/vendas/:codigo', deleteVendas);

app.post('/vendedor', createVendedor);
app.get('/vendedor/:codigo', getVendedor);
app.put('/vendedor/:codigo', updateVendedor);
app.delete('/vendedor/:codigo', deleteVendedor);

app.listen(8000);