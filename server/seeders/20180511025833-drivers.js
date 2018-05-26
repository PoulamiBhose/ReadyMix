'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('drivers', [{
        name: 'Ram Gopal Varma',
        mobileNo: 9786089767,
        address: 'Mumbai - 889977',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Prasenjeet Sen',
        mobileNo: 9786089767,
        address: 'Kolkata - 778866',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Yamla Pagla Dewana',
        mobileNo: 9786089767,
        address: 'Delhi - 112233',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Kiki Dudle Do',
        mobileNo: 9786089767,
        address: 'Assam - 667788',
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
