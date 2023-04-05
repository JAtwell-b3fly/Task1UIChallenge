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
      return Ingredients.findAll();
    }
  
    static findIngredientById(id) {
      return Ingredients.findByPk(id);
    }
  
    static createIngredient(ingredient) {
      return Ingredients.create(ingredient);
    }
  
    static updateIngredient(id, ingredient) {
      return Ingredients.update(ingredient, {
        where: {
          id
        }
      });
    }
  
    static destroyIngredient(id) {
      return Ingredients.destroy({
        where: {
          id
        }
      });
    }
  }
  
  
  Ingredients.init({
    ingredient_name: DataTypes.STRING,
    ingredient_description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Ingredients',
    timestamps: true,
    underscored: true
  });
  return Ingredients;
};