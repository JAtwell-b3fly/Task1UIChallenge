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

    // Finder Methods
    
    static findAllPaymentMethods() {
      // findAllPaymentMethods(): Retrieves all payment methods from the database.
      return PaymentMethod.findAll();
    }
  
    static findPaymentMethodById(id) {
      // findPaymentMethodById(id): Retrieves a payment method by its ID 
      // from the database.
      return PaymentMethod.findByPk(id);
    }
  
    static findPaymentMethodsByUserId(userId) {
      // findPaymentMethodsByUserId(userId): Retrieves all payment methods associated
      // with a given user ID from the database.
      return PaymentMethod.findAll({
        where: {
          user_id: userId
        }
      });
  } 
  static createPaymentMethod(paymentMethodData) {
    // createPaymentMethod(paymentMethodData): Creates a new payment 
    // method record in the database with the given data.
    return PaymentMethod.create(paymentMethodData);
  }

  static updatePaymentMethod(paymentMethodId, paymentMethodData) {
    // updatePaymentMethod(paymentMethodId, paymentMethodData): 
    // Updates an existing payment method record 
    // in the database with the given data, based on the payment method's ID.
    return PaymentMethod.update(paymentMethodData, {
      where: {
        id: paymentMethodId
      }
    });
  }

  static deletePaymentMethod(paymentMethodId) {
    // deletePaymentMethod(paymentMethodId): Deletes a payment method record from the 
    // database based on the payment method's ID.
    return PaymentMethod.destroy({
      where: {
        id: paymentMethodId
      }
    });
  }
}
  PaymentMethod.init({
    // Model attributes are defined here
    user_id: DataTypes.INTEGER,
    billing_address_id: DataTypes.INTEGER,
    cardholder_name: DataTypes.STRING,
    card_number: DataTypes.STRING,
    expiration_date: DataTypes.DATE,
    cvv: DataTypes.INTEGER,
    bank_name: DataTypes.STRING,
    branch_code: DataTypes.STRING
  }, {
    sequelize, // We need to pass the connection instance
    modelName: 'PaymentMethod',// We need to choose the model name
  });
  return PaymentMethod;
};