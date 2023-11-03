'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo_gasolinas extends Model {
    static associate(models) {
      tipo_gasolinas.hasMany(models.tanques, {
        foreignKey: 'id_tipo_gasolina'
      })
    }
  };
  tipo_gasolinas.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'tipo_gasolinas',
  });
  return tipo_gasolinas;
};