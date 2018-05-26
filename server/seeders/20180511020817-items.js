'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('items', [{
        name: 'Cement',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Bricks',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Stones',
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
