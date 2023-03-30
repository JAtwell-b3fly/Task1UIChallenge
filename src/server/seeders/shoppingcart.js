'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ShoppingCarts', [
      {
        userId: 1,
        productId: 1,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        productId: 2,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        productId: 3,
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ShoppingCarts', null, {});
  }
};
