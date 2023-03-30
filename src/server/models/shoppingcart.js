'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ShoppingCart extends Model {
    static associate(models) {
      // Define associations here
      ShoppingCart.belongsTo(models.User, { foreignKey: 'userId' });
      ShoppingCart.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }
  ShoppingCart.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ShoppingCart',
  });
  return ShoppingCart;
};