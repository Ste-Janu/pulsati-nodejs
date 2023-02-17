const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config-db').getDbConfig; 

class Vendas extends Model {}
Vendas.init({
  codigo: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true
  },
  codigoV: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  codigoP: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  quantidadeVendas: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
}, {
  sequelize: dbConfig(),
  modelName: 'ste_vendaa',
  timestamps: false
});

exports.Vendas = Vendas;