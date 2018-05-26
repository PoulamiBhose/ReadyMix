'use strict';
module.exports = (sequelize, DataTypes) => {
  var trucks = sequelize.define('trucks', {
    quantity: {
      type: DataTypes.NUMERIC,
      allowNull: false
    },
    truckNo: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  trucks.associate = function(models) {
    // associations can be defined here
  };
  return trucks;
};