'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        id: '1',
        username: 'john_doe',
        email: 'johndoe@gmail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        username: 'jane_doe',
        email: 'janedoe@gmail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3',
        username: 'bob_smith',
        email: 'bobsmith@gmail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
