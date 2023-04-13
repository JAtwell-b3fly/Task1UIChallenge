'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UsedPromoCodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      promo_id: {
        type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                model: 'Promotions',
                key: 'id'
              },
            },
    
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
      },
      orders_id: {
        type: Sequelize.INTEGER,
  
            allowNull: false,
            references: {
              model: 'Orders',
              key: 'id'
            },
          },
      used_at: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UsedPromoCodes');
  }
};