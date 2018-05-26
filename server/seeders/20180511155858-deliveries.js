'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('deliveries', [{
        custId: 7,
        address: 'Delivery Address 1',
        deliveryDate: new Date(),
        itemId: 8,
        quantity: 800,
        statusId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        custId: 7,
        address: 'Delivery Address 1',
        deliveryDate: new Date(),
        itemId: 7,
        quantity: 1000,
        statusId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        custId: 7,
        address: 'Delivery Address 1',
        deliveryDate: new Date(),
        itemId: 9,
        quantity: 700,
        statusId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        custId: 8,
        address: 'Delivery Address 1',
        deliveryDate: new Date(),
        itemId: 7,
        quantity: 1500,
        statusId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        custId: 8,
        address: 'Delivery Address 1',
        deliveryDate: new Date(),
        itemId: 8,
        quantity: 1000,
        statusId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        custId: 8,
        address: 'Delivery Address 1',
        deliveryDate: new Date(),
        itemId: 9,
        quantity: 800,
        statusId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        custId: 9,
        address: 'Delivery Address 1',
        deliveryDate: new Date(),
        itemId: 7,
        quantity: 1200,
        statusId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        custId: 9,
        address: 'Delivery Address 1',
        deliveryDate: new Date(),
        itemId: 8,
        quantity: 1000,
        statusId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        custId: 9,
        address: 'Delivery Address 1',
        deliveryDate: new Date(),
        itemId: 9,
        quantity: 1000,
        statusId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
