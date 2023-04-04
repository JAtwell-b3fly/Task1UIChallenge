'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const orders = [
      {
        userid: 1,
        orderAmount: 50.00,
        orderShipName: 'John Doe',
        orderShipAddress: '123 Main St',
        orderShipAddress2: 'Apt 2B',
        orderCity: 'New York',
        orderProvinceState: 'NY',
        orderZip: '10001',
        orderCountry: 'USA',
        orderTax: 5.00,
        orderEmail: 'johndoe@example.com',
        orderShipping: new Date(),
        orderShipped: true,
        orderTrackingNumber: '123456789'
      },
      {
        userid: 2,
        orderAmount: 100.00,
        orderShipName: 'Jane Smith',
        orderShipAddress: '456 Elm St',
        orderShipAddress2: '',
        orderCity: 'Los Angeles',
        orderProvinceState: 'CA',
        orderZip: '90001',
        orderCountry: 'USA',
        orderTax: 10.00,
        orderEmail: 'janesmith@example.com',
        orderShipping: new Date(),
        orderShipped: false,
        orderTrackingNumber: ''
      },
      // add more order objects as needed
    ];

    return queryInterface.bulkInsert('Orders', orders, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
