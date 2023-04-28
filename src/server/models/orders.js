'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    // Finder Methods

    // Find all orders
  static async findAllOrders() {
    // findAllOrders(): Find all orders in the database.
    try {
      const orders = await Orders.findAll();
      return orders;
    } catch (error) {
      throw new Error('Failed to fetch orders');
    }
  }

  // Find order by ID
  static async findOrderById(id) {
     // findOrderById(id): Find an order by its ID.
    try {
      const order = await Orders.findByPk(id);
      return order;
    } catch (error) {
      throw new Error('Failed to fetch order by ID');
    }
  }

  // Find orders by user ID
  static async findOrdersByUserId(userId) {
     // findOrdersByUserId(userId): Find orders by user ID.
    try {
      const orders = await Orders.findAll({ where: { user_id: userId } });
      return orders;
    } catch (error) {
      throw new Error('Failed to fetch orders by user ID');
    }
  }

  // Find orders by order status
  static async findOrdersByStatus(status) {
     //findOrdersByStatus(status): Find orders by order status.
    try {
      const orders = await Orders.findAll({ where: { order_status: status } });
      return orders;
    } catch (error) {
      throw new Error('Failed to fetch orders by status');
    }
  }

  // Create a new order
  static async createOrder(data) {
     // createOrder(data): Create a new order with the provided data.
    try {
      const order = await Orders.create(data);
      return order;
    } catch (error) {
      throw new Error('Failed to create order');
    }
  }

  // Update order by ID
  static async updateOrderById(id, data) {
     // updateOrderById(id, data): Update an order by its ID with the provided data.
    try {
      const order = await Orders.update(data, { where: { id: id } });
      return order;
    } catch (error) {
      throw new Error('Failed to update order by ID');
    }
  }

  // Delete order by ID
  static async deleteOrderById(id) {
    // deleteOrderById(id): Delete an order by its ID.
    try {
      const order = await Orders.destroy({ where: { id: id } });
      return order;
    } catch (error) {
      throw new Error('Failed to delete order by ID');
    }
  }
  }
  Orders.init({
   // Model attributes are defined here
    user_id: DataTypes.INTEGER,
    order_date: DataTypes.DATE,
    order_total: DataTypes.DECIMAL,
    shipping_method: DataTypes.STRING,
    shipping_cost: DataTypes.DECIMAL,
    shipping_address: DataTypes.TEXT,
    billing_address: DataTypes.TEXT,
    payment_method_info: DataTypes.TEXT,
    total_amount: DataTypes.DECIMAL,
    promo_discount_code: DataTypes.STRING,
    promo_discount_amount: DataTypes.DECIMAL,
    tax: DataTypes.DECIMAL,
    order_status: DataTypes.STRING,
    payment_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,// We need to pass the connection instance
    modelName: 'Orders',// We need to choose the model name
  });
  return Orders;
};