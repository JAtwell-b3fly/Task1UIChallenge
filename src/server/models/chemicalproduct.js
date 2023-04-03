'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChemicalProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ChemicalProduct.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    usageInstructions: DataTypes.STRING,
    safetyPrecautions: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    numOfReviews: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'ChemicalProduct',
  });
  return ChemicalProduct;
};