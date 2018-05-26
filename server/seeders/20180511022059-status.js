'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('statuses', [{
        name: 'Unassigned',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Assigned',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Started',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Loaded',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Dispatched',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Delivered',
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
