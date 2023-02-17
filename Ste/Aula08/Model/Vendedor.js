const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config-db').getDbConfig; 

class Vendedor extends Model {}
Vendedor.init({
  codigo: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.NUMBER,
  },
  telefone: {
    type: DataTypes.NUMBER,
  },
  endereco: {
    type: DataTypes.STRING,
  }
}, {
  sequelize: dbConfig(),
  modelName: 'ste_vendedor',
  timestamps: false
});

exports.Vendedor = Vendedor;