'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      
    return queryInterface.bulkInsert('customers', [{
        name: 'Suman Bandopadhyay',
        mobileNo: 9786756431,
        address: 'Rajarhat, Newtown, Kolkata - 787675',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Poulami Bhose',
        mobileNo: 9786756431,
        address: 'Rajarhat, Newtown, Kolkata - 787675',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John Doe',
        mobileNo: 9786567431,
        address: 'Rajarhat, Newtown, Kolkata - 787675',
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
