'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PaymentSettings', {
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
      payment_method: {
        type: Sequelize.STRING
      },
      card_number: {
        type: Sequelize.STRING
      },
      expiration_date: {
        type: Sequelize.DATE
      },
      cvv_code: {
        type: Sequelize.INTEGER
      },
      billinginformation_id: {
        type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                model: 'BillingInformations',
                key: 'id'
              },
            },
    
      routing_number: {
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
    await queryInterface.dropTable('PaymentSettings');
  }
};