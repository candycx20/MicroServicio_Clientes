'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo_pagos extends Model {
    static associate(models) {
      tipo_pagos.hasMany(models.tanques, {
        foreignKey: 'id_tipo_pago'
      })
    }
  };
  tipo_pagos.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'tipo_pagos',
  });
  return tipo_pagos;
};