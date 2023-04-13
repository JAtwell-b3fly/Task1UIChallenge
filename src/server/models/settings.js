'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Settings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    
    // Finder Methodsk
    static findAllSettings() {
     // findAllSettings(): Retrieves all settings records from the database and returns 
      // them as an array of objects.
      return Settings.findAll();
    }
  
    static findSettingById(id) {
      // findSettingById(id): Retrieves a single settings record from the database 
     // based on the provided id and returns it as an object.
      return Settings.findByPk(id);
    }
  
    static createSetting(setting) {
      // createSetting(setting): Creates a new settings record in the database 
      // with the provided data and returns the newly created record as an object.
      return Settings.create(setting);
    }
  
    static updateSetting(id, setting) {
     //  updateSetting(id, setting): Updates an existing settings record in the database based on the 
      // provided id with the new data provided in the setting object.
      return Settings.update(setting, {
        where: {
          id
        }
      });
    }
  
    static destroySetting(id) {
      // destroySetting(id): Deletes a settings record from the database based on the provided id
      return Settings.destroy({
        where: {
          id
        }
      });
    }
  }
  Settings.init({
     // Model attributes are defined here
    settings_name: DataTypes.STRING,
    settings_value: DataTypes.STRING
  }, {
    sequelize, // We need to pass the connection instance
    modelName: 'Settings',// We need to choose the model name
  });
  return Settings;
};