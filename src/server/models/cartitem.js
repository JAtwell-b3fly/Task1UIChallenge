'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    // Finder Methods 
    static getAllCartItems(userId) {
      // getAllCartItems(userId): Retrieves all cart items for a given user ID.
      return CartItem.findAll({
        where: {
          user_id: userId
        }
      });
    }
  
    static getCartItemById(cartItemId) {
      // getCartItemById(cartItemId): Retrieves a cart item by its ID.
      return CartItem.findOne({
        where: {
          id: cartItemId
        }
      });
    }
  
    static createCartItem(cartItemData) {
      // createCartItem(cartItemData): Creates a new cart item
      // record in the database with the given data.
      return CartItem.create(cartItemData);
    }
  
    static updateCartItem(cartItemId, cartItemData) {
      // updateCartItem(cartItemId, cartItemData): Updates an existing cart item record in 
      // the database with the given data, based on the cart item's ID.
      return CartItem.update(cartItemData, {
        where: {
          id: cartItemId
        }
      });
    }
  
    static deleteCartItem(cartItemId) {
      // deleteCartItem(cartItemId): Deletes a cart item record from the
      // database based on the cart item's ID.
      return CartItem.destroy({
        where: {
          id: cartItemId
        }
      });
    }
  }
  CartItem.init({
   
    // Model attributes are defined here
    Sessions_id: DataTypes.INTEGER,
    Products_id: DataTypes.INTEGER,
    Quantity: DataTypes.INTEGER,
    Status: DataTypes.STRING
  }, {
    sequelize,// We need to pass the connection instance
    modelName: 'CartItem', // We need to choose the model name
  });
  return CartItem;
};