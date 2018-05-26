'use strict';
module.exports = (sequelize, DataTypes) => {
  var forms = sequelize.define('forms', {
    pumpAvailability: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    pumpNo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    totalDelivered: {
      type: DataTypes.NUMERIC,
      allowNull: false
    },
    loadingTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    arrivalTime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});
  forms.associate = function(models) {
    // associations can be defined here
  };
  return forms;
};