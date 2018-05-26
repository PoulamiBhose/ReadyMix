'use strict';
module.exports = (sequelize, DataTypes) => {
  var deliveries = sequelize.define('deliveries', {
    custId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deliveryDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.NUMERIC,
      allowNull: false,
    },
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  deliveries.associate = function(models) {
    // associations can be defined here
    deliveries.belongsTo(models.customers, {
      foreignKey: 'custId',
      onDelete: 'CASCADE',
    });
    deliveries.belongsTo(models.items, {
      foreignKey: 'itemId',
      onDelete: 'CASCADE',
    });
    deliveries.belongsTo(models.statuses, {
      foreignKey: 'statusId',
      onDelete: 'CASCADE',
    });
  };
  return deliveries;
};