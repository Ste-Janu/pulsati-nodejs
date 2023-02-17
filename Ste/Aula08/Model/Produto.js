const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config-db').getDbConfig; 

class Produto extends Model {}
Produto.init({
  codigo: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  marca: {
    type: DataTypes.STRING,
  },
  descricao: {
    type: DataTypes.STRING,
  },
  valor: {
    type: DataTypes.NUMBER,
  }
}, {
  sequelize: dbConfig(),
  modelName: 'ste_produtoo',
  timestamps: false
});

exports.Produto = Produto;