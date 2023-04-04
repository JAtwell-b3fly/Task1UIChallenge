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
      id: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      orderAmount: {
        type: Sequelize.FLOAT
      },
      orderShipName: {
        type: Sequelize.STRING
      },
      orderShipAddress: {
        type: Sequelize.STRING
      },
      orderShipAddress2: {
        type: Sequelize.STRING
      },
      orderCity: {
        type: Sequelize.STRING
      },
      orderProvinceState: {
        type: Sequelize.STRING
      },
      orderZip: {
        type: Sequelize.STRING
      },
      orderCountry: {
        type: Sequelize.STRING
      },
      orderTax: {
        type: Sequelize.FLOAT
      },
      orderEmail: {
        type: Sequelize.STRING
      },
      orderShipping: {
        type: Sequelize.DATE
      },
      orderShipped: {
        type: Sequelize.BOOLEAN
      },
      orderTrackingNumber: {
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
    await queryInterface.dropTable('Orders');
  }
};