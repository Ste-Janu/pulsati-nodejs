const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config-db').getDbConfig; 

class Autores extends Model {}
Autores.init({
  codigo: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sobrenome: {
    type: DataTypes.STRING
  },
  dataNasc: {
    type: DataTypes.DATE
  }
}, {
  sequelize: dbConfig(),
  modelName: 'STE_AUTOR',
  timestamps: false
});

exports.Autores = Autores;