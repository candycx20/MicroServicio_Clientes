'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transacciones extends Model {
    static associate(models) {
      transacciones.belongsTo(models.vendedores, {
        foreignKey: 'id_vendedor'
      })
      transacciones.belongsTo(models.clientes, {
        foreignKey: 'id_cliente'
      })
    }
  };
  transacciones.init({
    cantidad_vendida: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    precio_galon: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_vendedor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'transacciones',
  });
  return transacciones;
};