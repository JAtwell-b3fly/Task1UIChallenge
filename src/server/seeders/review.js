'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        rating: 5,
        comment: 'This is a great product!',
        userId: 1,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        comment: 'It could be better',
        userId: 2,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 4,
        comment: 'Very good product, but a bit expensive',
        userId: 3,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
