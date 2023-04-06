'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PaymentMethods', {
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
      billinginformation_id: {
        type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                model: 'BillingInformations',
                key: 'id'
              },
            },
    
      cardholder_name: {
        type: Sequelize.STRING
      },
      card_number: {
        type: Sequelize.STRING
      },
      expiration_date: {
        type: Sequelize.DATE
      },
      cvv: {
        type: Sequelize.INTEGER
      },
      bank_name: {
        type: Sequelize.STRING
      },
      branch_code: {
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
    await queryInterface.dropTable('PaymentMethods');
  }
};