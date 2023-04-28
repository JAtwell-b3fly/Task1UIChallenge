'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    
    //Finder methods

    static findAllIngredients() {
      // findAll: This method finds all ingredients in the database and 
      // returns them as an array of objects.
      return Ingredients.findAll();
    }
  
    static findIngredientById(id) {
      // findByPk: This method finds an ingredient by its primary key (id) and returns it as an object.
      return Ingredients.findByPk(id);
    }
  
    static createIngredient(ingredient) {
      // findOrCreate: This method finds an ingredient based on a set of query options, and 
      // if it does not exist, it creates it and returns it as an object.
      return Ingredients.create(ingredient);
    }
  
    static updateIngredient(id, ingredient) {
      // updateIngredient: This method updates an ingredient based on a set of query options and new values, 
      // and returns the number of affected rows.
      return Ingredients.update(ingredient, {
        where: {
          id
        }
      });
    }
  
    static destroyIngredient(id) {
      // destroy: This method deletes an ingredient based on a set of query options, and
      //  returns the number of affected rows.
      return Ingredients.destroy({
        where: {
          id
        }
      });
    }
  }
  
  
  Ingredients.init({
     // Model attributes are defined here
    ingredient_name: DataTypes.STRING,
    ingredient_description: DataTypes.TEXT
  }, {
    sequelize,// We need to pass the connection instance
    modelName: 'Ingredients',// We need to choose the model name
    timestamps: true,
    underscored: true
  });
  return Ingredients;
};