'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
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
      order_date: {
        type: Sequelize.DATE
      },
      order_total: {
        type: Sequelize.DECIMAL
      },
      shipping_method: {
        type: Sequelize.STRING
      },
      shipping_cost: {
        type: Sequelize.DECIMAL
      },
      shipping_address: {
        type: Sequelize.TEXT
      },
      billing_address: {
        type: Sequelize.TEXT
      },
      payment_method_info: {
        type: Sequelize.TEXT
      },
      total_amount: {
        type: Sequelize.DECIMAL
      },
      promo_discount_code: {
        type: Sequelize.STRING
      },
      promo_discount_amount: {
        type: Sequelize.DECIMAL
      },
      tax: {
        type: Sequelize.DECIMAL
      },
      order_status: {
        type: Sequelize.STRING
      },
     payment_id: {
        type: Sequelize.INTEGER,

          allowNull: false,
          references: {
            model: 'Payment',
            key: 'id'
          },
        }, 
      
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
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
    await queryInterface.dropTable('Orders');
  }
};