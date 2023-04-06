'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentSettings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    // Finder Methods
    static async findAllPaymentSettings() {
      // findAllPaymentSettings(): This method fetches all payment settings records
      //  from the database using the findAll() 
      // method provided by Sequelize. It returns an array of payment settings objects.
      try {
        const paymentSettings = await PaymentSettings.findAll();
        return paymentSettings;
      } catch (error) {
        throw new Error('Failed to fetch PaymentSettings');
      }
    }
  
    static async findPaymentSettingsByUserId(userId) {
      // findPaymentSettingsByUserId(userId): This method fetches a payment 
      // settings record from the database based on the provided userId. It uses the findOne() method with a where clause to filter 
     //  by the user_id field. It returns a single payment settings object or null if not found.
      try {
        const paymentSettings = await PaymentSettings.findOne({ where: { user_id: userId } });
        return paymentSettings;
      } catch (error) {
        throw new Error('Failed to fetch PaymentSettings');
      }
    }
  
    static async createPaymentSettings(data) {
      // createPaymentSettings(data): This method creates a new payment settings 
      // record in the database with the provided data. It uses the create() method provided by Sequelize 
      // and passes the data as an argument. It returns the newly created payment settings object.
      try {
        const paymentSettings = await PaymentSettings.create(data);
        return paymentSettings;
      } catch (error) {
        throw new Error('Failed to create PaymentSettings');
      }
    }
  
    static async updatePaymentSettingsByUserId(userId, data) {
      // updatePaymentSettingsByUserId(userId, data): This method updates an existing 
      // payment settings record in the database based on the provided userId and data.
      // It uses the update() method with a where clause to filter by the user_id field, and passes the data as an argument to update the record. 
      // It returns an array with the number of updated rows and the updated payment settings objects.
      try {
        const paymentSettings = await PaymentSettings.update(data, { where: { user_id: userId } });
        return paymentSettings;
      } catch (error) {
        throw new Error('Failed to update PaymentSettings');
      }
    }
  
    static async deletePaymentSettingsByUserId(userId) {
      // deletePaymentSettingsByUserId(userId): This method deletes an existing payment settings 
      // record from the database based on the provided userId. It uses the destroy() method 
      // with a where clause to filter by the user_id field. 
      // It returns the number of deleted rows.
      try {
        const paymentSettings = await PaymentSettings.destroy({ where: { user_id: userId } });
        return paymentSettings;
      } catch (error) {
        throw new Error('Failed to delete PaymentSettings');
      }
    }
  }
  PaymentSettings.init({
     //  Model attributes are defined here
    user_id: DataTypes.INTEGER,
    payment_method: DataTypes.STRING,
    card_number: DataTypes.STRING,
    expiration_date: DataTypes.DATE,
    cvv_code: DataTypes.INTEGER,
    billinginformation_id: DataTypes.INTEGER,
    routing_number: DataTypes.STRING
  }, {
    sequelize, // We need to pass the connection instance
    modelName: 'PaymentSettings', // We need to choose the model name
  });
  return PaymentSettings;
};