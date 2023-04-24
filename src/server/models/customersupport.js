'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerSupport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    
    }

    // Finder Methods
    
    static async findAllSupportTypes() {
      // findAll() - returns all customer support messages in the database
      return await CustomerSupport.findAll({
        attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('support_type')), 'support_type']]
      });
    }
  
    static async findBySupportType(supportType) {
      // findBySupportType(supportType) - returns all customer support messages
      //  with the specified support type
      return await CustomerSupport.findAll({
        where: { support_type: supportType }
      });
    }
  
    static async findBySupportEmail(supportEmail) {
      // findBySupportEmail(supportEmail) - returns all customer support messages
      //  with the specified support email
      return await CustomerSupport.findAll({
        where: { support_email: supportEmail }
      });
    }
  
    static async findBySupportMessage(supportMessage) {
      // findBySupportMessage(supportMessage) - returns all customer support messages 
      // with the specified support message
      return await CustomerSupport.findAll({
        where: { support_message: supportMessage }
      });
    }
  
    static async createSupport(support) {
      // create(data) - creates a new customer support message with the specified data
      return await CustomerSupport.create(support);
    }
  
    static async updateSupport(id, support) {
      // updateById(id, data) - updates the customer support message with the 
      // specified ID with the specified data
      return await CustomerSupport.update(support, {
        where: { id: id }
      });
    }
  
    static async deleteSupport(id) {
      // deleteById(id) - deletes the customer support message
      //  with the specified ID from the database
      return await CustomerSupport.destroy({
        where: { id: id }
      });
    }


  }
  CustomerSupport.init({
   // Model attributes are defined here
    support_type: DataTypes.STRING,
    support_email: DataTypes.STRING,
    support_message: DataTypes.TEXT
  }, {
    sequelize, // We need to pass the connection instance
    modelName: 'CustomerSupport', // We need to choose the model name
  });
  return CustomerSupport;
};