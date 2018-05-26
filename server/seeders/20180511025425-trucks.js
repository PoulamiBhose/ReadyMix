'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('trucks', [{
        quantity: '1000',
        truckNo: 'XTC 5 C 786',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        quantity: '800',
        truckNo: 'XTC 5 C 785',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        quantity: '1200',
        truckNo: 'XTC 5 C 784',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        quantity: '2000',
        truckNo: 'XTC 5 C 782',
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
