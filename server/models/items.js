'use strict';
module.exports = (sequelize, DataTypes) => {
  var items = sequelize.define('items', {
    name: DataTypes.STRING
  }, {});
  items.associate = function(models) {
    // associations can be defined here
    items.hasMany(models.deliveries, {
      foreignKey: 'itemId',
      as: 'deliveries',
    });
  };
  return items;
};