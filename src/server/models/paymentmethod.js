'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PaymentMethod.init({
    user_id: DataTypes.INTEGER,
    billing_address_id: DataTypes.INTEGER,
    cardholder_name: DataTypes.STRING,
    card_number: DataTypes.STRING,
    expiration_date: DataTypes.DATE,
    cvv: DataTypes.INTEGER,
    bank_name: DataTypes.STRING,
    branch_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PaymentMethod',
  });
  return PaymentMethod;
};