'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vendedores extends Model {
    static associate(models) {
      vendedores.hasMany(models.transacciones, {
        foreignKey: 'id_vendedor'
      })
    }
  };
  vendedores.init({
    dpi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'vendedores',
  });
  return vendedores;
};