const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config-db').getDbConfig; 

class Editoras extends Model {}
Editoras.init({
  codigo: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  CNPJ: {
    type: DataTypes.NUMBER,
  },
}, {
  sequelize: dbConfig(),
  modelName: 'STE_EDITORAS',
  timestamps: false
});

exports.Editoras = Editoras;