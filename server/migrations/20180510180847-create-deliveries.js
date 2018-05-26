'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('deliveries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      custId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'customers',
          key: 'id',
          as: 'custId'
        }
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      deliveryDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      itemId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'items',
          key: 'id',
          as: 'itemId'
        }
      },
      quantity: {
        allowNull: false,
        type: Sequelize.NUMERIC
      },
      statusId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'statuses',
          key: 'id',
          as: 'statusId'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('deliveries');
  }
};