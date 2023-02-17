const { Model, DataTypes } = require('sequelize');
const dbConfig = require('../config-db').getDbConfig; 

class Aeroporto extends Model {}
Aeroporto.init({
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    sequelize: dbConfig(),
    modelName: 'ste_aeroporto',
    timestamps: false,
});

exports.Aeroporto = Aeroporto;