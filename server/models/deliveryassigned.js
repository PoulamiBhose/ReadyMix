'use strict';
module.exports = (sequelize, DataTypes) => {
  var deliveryAssigned = sequelize.define('deliveryAssigned', {
    deliveryId: DataTypes.INTEGER,
    driverId: DataTypes.INTEGER,
    truckId: DataTypes.INTEGER
  }, {});
  deliveryAssigned.associate = function(models) {
    // associations can be defined here
  };
  return deliveryAssigned;
};