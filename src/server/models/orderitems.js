'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
     // Finder Methods
    static async findAllOrderItems() {
        // findAllOrderItems(): This static method finds and 
        // returns all order items from the order_items table in the database.

      try {
        const orderItems = await OrderItems.findAll();
        return orderItems;
      } catch (error) {
        throw new Error('Failed to fetch OrderItems');
      }
    }
  
    static async findOrderItemsByOrderId(orderId) {
      // findOrderItemsByOrderId(orderId): This static method finds and returns all order
      //  items with a specific orderId from the order_items table in the database.
      try {
        const orderItems = await OrderItems.findAll({ where: { order_id: orderId } });
        return orderItems;
      } catch (error) {
        throw new Error('Failed to fetch OrderItems');
      }
    }
  
    static async createOrderItem(data) {
      // createOrderItem(data): This static method creates and returns a new order item in
      //  the order_items table in the database, using the provided data object.
      try {
        const orderItem = await OrderItems.create(data);
        return orderItem;
      } catch (error) {
        throw new Error('Failed to create OrderItem');
      }
    }
  
    static async updateOrderItemById(id, data) {
      // updateOrderItemById(id, data): This static method updates and returns an existing 
      // order item with a specific id in the order_items table in the database, 
      // using the provided data object.
      try {
        const orderItem = await OrderItems.update(data, { where: { id } });
        return orderItem;
      } catch (error) {
        throw new Error('Failed to update OrderItem');
      }
    }
  
    static async deleteOrderItemById(id) {
      // deleteOrderItemById(id): This static method deletes and returns an existing order
      //  item with a specific id from the order_items table in the database.
      try {
        const orderItem = await OrderItems.destroy({ where: { id } });
        return orderItem;
      } catch (error) {
        throw new Error('Failed to delete OrderItem');
      }
    }
  }
  OrderItems.init({
        // Model attributes are defined here
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,// We need to pass the connection instance
    modelName: 'OrderItems',// We need to choose the model name
  });
  return OrderItems;
};