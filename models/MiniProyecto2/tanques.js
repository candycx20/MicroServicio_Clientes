'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tanques extends Model {
    static associate(models) {
      tanques.belongsTo(models.tipo_gasolinas, {
        foreignKey: 'id_tipo_gasolina'
      })
      tanques.belongsTo(models.clientes, {
        foreignKey: 'id_tipo_cliente'
      })
      tanques.belongsTo(models.tipo_pagos, {
        foreignKey: 'id_tipo_pago'
      })
    }
  };
  tanques.init({
    capacidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nivel_actual: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ubicacion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_tipo_gasolina: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_tipo_pago: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'tanques',
  });
  return tanques;
};