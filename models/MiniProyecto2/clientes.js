'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientes extends Model {
    static associate(models) {
      clientes.hasMany(models.tanques, {
        foreignKey: 'id_cliente'
      });
      clientes.hasMany(models.transacciones, {
        foreignKey: 'id_cliente'
      })
    }
  };
  clientes.init({
    dpi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    puntos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'clientes',
  });
  return clientes;
};