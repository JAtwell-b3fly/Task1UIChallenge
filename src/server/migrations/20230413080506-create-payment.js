'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      payment_method: {
        type: Sequelize.STRING
      },
      payment_amount: {
        type: Sequelize.DECIMAL
      },
      payment_date: {
        type: Sequelize.DATE
      },
      payment_status: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Payments');
  }
};