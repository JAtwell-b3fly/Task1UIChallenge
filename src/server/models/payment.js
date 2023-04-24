'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    // Finder Methods 
    
  static async findAllPayments() {
    // findAllPayments(): Fetches all payments from the database.
    try {
      const payments = await Payment.findAll();
      return payments;
    } catch (error) {
      throw new Error('Failed to fetch payments');
    }
  }

  static async findPaymentById(id) {
    // findPaymentById(id): Fetches a payment by its ID from the database.
    try {
      const payment = await Payment.findByPk(id);
      return payment;
    } catch (error) {
      throw new Error('Failed to fetch payment by ID');
    }
  }

  static async findPaymentsByUserId(userId) {
    // findPaymentsByUserId(userId): Fetches all payments for a
     // user by their user ID from the database.
    try {
      const payments = await Payment.findAll({ where: { user_id: userId } });
      return payments;
    } catch (error) {
      throw new Error('Failed to fetch payments by user ID');
    }
  }

  static async findPaymentsByOrderId(orderId) {
    // findPaymentsByOrderId(orderId): Fetches all payments for an order 
    // by its order ID from the database.
    try {
      const payments = await Payment.findAll({ where: { order_id: orderId } });
      return payments;
    } catch (error) {
      throw new Error('Failed to fetch payments by order ID');
    }
  }

  static async createPayment(data) {
  // createPayment(data): Creates a new payment with the provided data in the database.
    try {
      const payment = await Payment.create(data);
      return payment;
    } catch (error) {
      throw new Error('Failed to create payment');
    }
  }

  static async updatePaymentById(id, data) {
   //  updatePaymentById(id, data): Updates an existing payment with 
    // the provided data by its ID in the database.
    try {
      const payment = await Payment.update(data, { where: { id: id } });
      return payment;
    } catch (error) {
      throw new Error('Failed to update payment by ID');
    }
  }

  static async deletePaymentById(id) {
    //deletePaymentById(id): Deletes a payment by its ID from the database.
    try {
      const payment = await Payment.destroy({ where: { id: id } });
      return payment;
    } catch (error) {
      throw new Error('Failed to delete payment by ID');
    }
  }
  }
  Payment.init({
     // Model attributes are defined here
    user_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    payment_method: DataTypes.STRING,
    payment_amount: DataTypes.DECIMAL,
    payment_date: DataTypes.DATE,
    payment_status: DataTypes.STRING
  }, {
    sequelize,// We need to pass the connection instance
    modelName: 'Payment',// We need to choose the model name
  });
  return Payment;
};