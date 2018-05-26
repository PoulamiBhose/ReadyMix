'use strict';
module.exports = (sequelize, DataTypes) => {
  var customers = sequelize.define('customers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mobileNo: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  customers.associate = function(models) {
    // associations can be defined here
    customers.hasMany(models.deliveries, {
      foreignKey: 'custId',
      as: 'deliveries',
    });
  };
  return customers;
};