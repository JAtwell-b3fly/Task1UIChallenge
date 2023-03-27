'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compatibility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Compatibility.init({
    productId: DataTypes.INTEGER,
    compatibilityInfo: DataTypes.STRING,
    surfaceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Compatibility',
  });
  return Compatibility;
};