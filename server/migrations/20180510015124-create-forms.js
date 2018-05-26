'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('forms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pumpAvailability: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      pumpNo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      totalDelivered: {
        allowNull: false,
        type: Sequelize.NUMERIC
      },
      loadingTime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      arrivalTime: {
        allowNull: false,
        type: Sequelize.DATE
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
    return queryInterface.dropTable('forms');
  }
};