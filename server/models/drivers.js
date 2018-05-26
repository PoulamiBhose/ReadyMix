'use strict';
module.exports = (sequelize, DataTypes) => {
  var drivers = sequelize.define('drivers', {
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
  drivers.associate = (models) => {
    // associations can be defined here
  };
  return drivers;
};