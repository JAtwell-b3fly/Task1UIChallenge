'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Support extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    
    // Finder Methods
    
    static createSupport(supportData) {
      // createSupport(supportData): This method creates a new Support record with the 
      return Support.create(supportData);
    }
  
    static findAllSupports() {
      // findAllSupports(): This method retrieves all Support records from the database.
      return Support.findAll();
    }
  
    static findSupportById(id) {
      // findSupportById(id): This method retrieves a specific Support record by its id from the database.
      return Support.findByPk(id);
    }
  
    static updateSupport(id, supportData) {
      // updateSupport(id, supportData): This method updates a specific Support record 
      // with the provided supportData by its id in the database.
      return Support.update(supportData, {
        where: {
          id
        }
      });
    }
  
    static deleteSupport(id) {
    // deleteSupport(id): This method deletes a specific 
    // Support record by its id from the database.
      return Support.destroy({
        where: {
          id
        }
      });
    }
  }
  Support.init({
     // Model attributes are defined here
    support_type: DataTypes.STRING,
    support_email: DataTypes.STRING,
    support_message: DataTypes.STRING
  }, {
    sequelize,// We need to pass the connection instance
    modelName: 'Support', // We need to choose the model name
  });
  return Support;
};