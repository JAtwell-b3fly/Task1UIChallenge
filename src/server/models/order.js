'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    orderAmount: DataTypes.FLOAT,
    orderShipName: DataTypes.STRING,
    orderShipAddress: DataTypes.STRING,
    orderShipAddress2: DataTypes.STRING,
    orderCity: DataTypes.STRING,
    orderProvinceState: DataTypes.STRING,
    orderZip: DataTypes.STRING,
    orderCountry: DataTypes.STRING,
    orderTax: DataTypes.FLOAT,
    orderEmail: DataTypes.STRING,
    orderShipping: DataTypes.DATE,
    orderShipped: DataTypes.BOOLEAN,
    orderTrackingNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};