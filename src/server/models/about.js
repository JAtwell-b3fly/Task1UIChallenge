'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class About extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    // Finder methods
  static findAllAbouts() {
    // findAllAbouts(): Find all abouts in the database
    return About.findAll();
  }

  static findAboutById(id) {
    // findAboutById(id): Find a specific about by its ID
    return About.findByPk(id);
  }

  static createAbout(about) {
    // createAbout(about): Create a new about in the database
    return About.create(about);
  }

  static updateAbout(id, about) {
    // updateAbout(id, about): Update an existing about in the database
    return About.update(about, {
      where: {
        id
      }
    });
  }

  static destroyAbout(id) {
   //  destroyAbout(id): Delete an existing about from the database
    return About.destroy({
      where: {
        id
      }
    });
  }
  }
  About.init({
    // Model attributes are defined here
    about_title: DataTypes.STRING, 
    about_description: DataTypes.TEXT  
  }, {
    sequelize,// We need to pass the connection instance
    modelName: 'About',//  We need to choose the model name
  });
  return About;
};