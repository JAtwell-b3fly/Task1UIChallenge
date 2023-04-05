'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Promotions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Promotions.init({
    promo_code: DataTypes.STRING,
    promo_description: DataTypes.TEXT,
    discount_type: DataTypes.STRING,
    discount_value: DataTypes.FLOAT,
    minimum_purchase_amount: DataTypes.FLOAT,
    maximum_purchase_amount: DataTypes.FLOAT,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Promotions',
  });
  return Promotions;
};