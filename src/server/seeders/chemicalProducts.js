'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ChemicalProducts', [
      {
        name: 'Product 1',
        description: 'Description for product 1',
        imageUrl: 'https://example.com/product1.jpg',
        ingredients: 'Water, sodium chloride, citric acid',
        usageInstructions: 'Dilute 1 part product with 4 parts water, apply and rinse',
        safetyPrecautions: 'Avoid contact with eyes and skin, use in well-ventilated areas',
        price: 10.99,
        rating: 4.5,
        numOfReviews: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Product 2',
        description: 'Description for product 2',
        imageUrl: 'https://example.com/product2.jpg',
        ingredients: 'Sodium bicarbonate, citric acid, fragrance',
        usageInstructions: 'Drop one tablet in a tub of water, wait for it to dissolve, and soak',
        safetyPrecautions: 'Avoid ingestion, keep out of reach of children',
        price: 5.99,
        rating: 3.8,
        numOfReviews: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ChemicalProducts', null, {});
  }
};
