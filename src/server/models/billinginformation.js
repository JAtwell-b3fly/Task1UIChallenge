'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BillingInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    // Finder Methods
    static async findAllBillingInformation() {
      try {
        const billingInformation = await BillingInformation.findAll();
        return billingInformation;
      } catch (error) {
        throw new Error('Failed to fetch BillingInformation');
      }
    }
    
    static async findBillingInformationByUserId(userId) {
      try {
        const billingInformation = await BillingInformation.findOne({ where: { user_id: userId } });
        return billingInformation;
      } catch (error) {
        throw new Error('Failed to fetch BillingInformation');
      }
    }
    
    static async createBillingInformation(data) {
      try {
        const billingInformation = await BillingInformation.create(data);
        return billingInformation;
      } catch (error) {
        throw new Error('Failed to create BillingInformation');
      }
    }
    
    static async updateBillingInformationByUserId(userId, data) {
      try {
        const billingInformation = await BillingInformation.update(data, { where: { user_id: userId } });
        return billingInformation;
      } catch (error) {
        throw new Error('Failed to update BillingInformation');
      }
    }
    
    static async deleteBillingInformationByUserId(userId) {
      try {
        const billingInformation = await BillingInformation.destroy({ where: { user_id: userId } });
        return billingInformation;
      } catch (error) {
        throw new Error('Failed to delete BillingInformation');
      }
    }
    
  }
  BillingInformation.init({
     // Model attributes are defined here
    user_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,// We need to pass the connection instance
    modelName: 'BillingInformation',// We need to choose the model name
  });
  return BillingInformation;
};