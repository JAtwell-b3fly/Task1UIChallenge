'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    // Finder Methods
    static findAllOrderStatuses() {
      // findAllOrderStatuses(): Fetches all order statuses from the database.
      try {
        return OrderStatus.findAll();
      } catch (error) {
        throw new Error('Failed to fetch OrderStatuses');
      }
    }
    
    static findOrderStatusById(id) {
      // findOrderStatusById(id): Fetches an order status by its ID from the database.
      try {
        return OrderStatus.findByPk(id);
      } catch (error) {
        throw new Error('Failed to fetch OrderStatus by ID');
      }
    }
    
    static createOrderStatus(data) {
      // createOrderStatus(data):
      // Creates a new order status with the provided data in the database.
      try {
        return OrderStatus.create(data);
      } catch (error) {
        throw new Error('Failed to create OrderStatus');
      }
    }
    
    static updateOrderStatusById(id, data) {
      // updateOrderStatusById(id, data): Updates an existing order
      //  status with the provided data by its ID in the database.
      try {
        return OrderStatus.update(data, { where: { id } });
      } catch (error) {
        throw new Error('Failed to update OrderStatus');
      }
    }
    
    static deleteOrderStatusById(id) {
      // deleteOrderStatusById(id): Deletes an order status by its ID from the database.
      try {
        return OrderStatus.destroy({ where: { id } });
      } catch (error) {
        throw new Error('Failed to delete OrderStatus');
      }
    }
    
  }
  OrderStatus.init({
       // Model attributes are defined here
    orders_id: DataTypes.INTEGER,
    status_type: DataTypes.STRING,
    status_date: DataTypes.DATE
  }, {
    sequelize,// We need to pass the connection instance
    modelName: 'OrderStatus',// We need to choose the model name
  });
  return OrderStatus;
};