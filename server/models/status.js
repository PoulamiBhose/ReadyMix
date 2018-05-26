'use strict';
module.exports = (sequelize, DataTypes) => {
  var status = sequelize.define('statuses', {
    name: DataTypes.STRING
  }, {});
  status.associate = function(models) {
    // associations can be defined here
    status.hasMany(models.deliveries, {
      foreignKey: 'statusId',
      as: 'deliveries',
    });
  };
  return status;
};