'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transacciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cantidad_vendida: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      precio_galon: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false
      },
      total: {
        type: Sequelize.INTEGER,
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
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'clientes',
            key: 'id'
        }
      },
      id_vendedor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'vendedores',
            key: 'id'
        }
      },
    });
    
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('transacciones');
  }
};