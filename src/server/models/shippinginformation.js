'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShippingInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    
  // Create a new shipping information record
  static createShippingInformation(user_id, first_name, last_name, email, password, phone_number, address) {
    return ShippingInformation.create({
      user_id,
      first_name,
      last_name,
      email,
      password,
      phone_number,
      address
    });
  }

  // Find all shipping information records
  static findAllShippingInformation() {
    return ShippingInformation.findAll();
  }

  // Find a shipping information record by ID
  static findShippingInformationById(id) {
    return ShippingInformation.findByPk(id);
  }

  // Update a shipping information record by ID
  static updateShippingInformation(id, data) {
    return ShippingInformation.update(data, {
      where: {
        id
      }
    });
  }

  // Delete a shipping information record by ID
  static deleteShippingInformation(id) {
    return ShippingInformation.destroy({
      where: {
        id
      }
    });
  }

  }
  ShippingInformation.init({
    user_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ShippingInformation',
  });
  return ShippingInformation;
};