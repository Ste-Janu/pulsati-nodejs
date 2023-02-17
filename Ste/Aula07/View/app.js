const { createAutor, getAutor, updateAutor, deleteAutor } = require('../Controller/autores-controller');
const { createEditora, getEditora, updateEditora, deleteEditora } = require('../Controller/editoras-controller');

const express = require('express');
const app = express();
app.use(express.json());

app.post('/autores', createAutor);
app.get('/autores/:codigo', getAutor);
app.put('/autores/:codigo', updateAutor);
app.delete('/autores/:codigo', deleteAutor);

app.post('/editoras', createEditora);
app.get('/editoras/:codigo', getEditora);
app.put('/editoras/:codigo', updateEditora);
app.delete('/editoras/:codigo', deleteEditora);

app.listen(8000);