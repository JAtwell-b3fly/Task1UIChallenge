'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SafetyInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    // Finder Methods
    static async findAllSafetyInformation() {
      // findAllSafetyInformation(): This method retrieves all safety information
       // records from the database using the
      // findAll() method provided by Sequelize. It returns an array of SafetyInformation objects.
      try {
        const safetyInfo = await SafetyInformation.findAll();
        return safetyInfo;
      } catch (error) {
        throw new Error('Failed to retrieve SafetyInformation: ' + error);
      }
    }
  
    static async findSafetyInformationById(id) {
      // findSafetyInformationById(id): This method retrieves a safety 
      // information record from the database by its primary key (id)
      //  using the findByPk() method provided by Sequelize. It returns a single SafetyInformation object.
      try {
        const safetyInfo = await SafetyInformation.findByPk(id);
        return safetyInfo;
      } catch (error) {
        throw new Error('Failed to retrieve SafetyInformation: ' + error);
      }
    }
  
    static async createSafetyInformation(data) {
      // createSafetyInformation(data): This method creates a new safety
      //  information record in the database with the provided data using the create()
       // method provided by Sequelize. It returns the created SafetyInformation object.
      try {
        const safetyInfo = await SafetyInformation.create(data);
        return safetyInfo;
      } catch (error) {
        throw new Error('Failed to create SafetyInformation: ' + error);
      }
    }
  
    static async updateSafetyInformation(id, data) {
      // updateSafetyInformation(id, data): This method updates an existing safety 
      // information record in the database by its primary key (id) with the provided data using the update() 
      // method provided by Sequelize. It returns the updated SafetyInformation objec
      try {
        const safetyInfo = await SafetyInformation.findByPk(id);
        if (!safetyInfo) {
          throw new Error('SafetyInformation not found');
        }
        const updatedSafetyInfo = await safetyInfo.update(data);
        return updatedSafetyInfo;
      } catch (error) {
        throw new Error('Failed to update SafetyInformation: ' + error);
      }
    }
  
    static async deleteSafetyInformation(id) {
      // deleteSafetyInformation(id): This method deletes a safety information 
      // record from the database by its primary key (id) using the destroy()
       // method provided by Sequelize. It returns a success message upon successful deletion.
      try {
        const safetyInfo = await SafetyInformation.findByPk(id);
        if (!safetyInfo) {
          throw new Error('SafetyInformation not found');
        }
        await safetyInfo.destroy();
        return 'SafetyInformation deleted successfully';
      } catch (error) {
        throw new Error('Failed to delete SafetyInformation: ' + error);
      }
    }
  }
  SafetyInformation.init({
    // Model attributes are defined here
    product_id: DataTypes.INTEGER,  
    safety_title: DataTypes.STRING, 
    safety_description: DataTypes.TEXT
  }, {
    sequelize,// We need to pass the connection instance
    modelName: 'SafetyInformation', // We need to choose the model name
  });
  return SafetyInformation;
};