'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tanques', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      capacidad: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nivel_actual: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ubicacion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      id_tipo_gasolina: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'tipo_gasolinas',
            key: 'id'
        }
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'clientes',
            key: 'id'
        }
      },
      id_tipo_pago: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'tipo_pagos',
            key: 'id'
        }
      },
    });
    
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tanques');
  }
};