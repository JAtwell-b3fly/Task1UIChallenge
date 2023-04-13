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
    //  Finder methods

    static findAllPromotions() {
    //findAllPromotions(): Finds and returns all promotions in the database.
      return Promotions.findAll();
    }
  
    static findPromotionById(id) {
      // findPromotionById(id): Finds and returns a promotion by its ID.
      return Promotions.findByPk(id);
    }
  
    static findPromotionByCode(code) {
      // findPromotionByCode(code): Finds and returns a promotion by its code.
      return Promotions.findOne({
        where: {
          code: code
        }
      });
    }
  
    static findActivePromotions() {
      // findActivePromotions(): Finds and returns all active promotions in the database.
      return Promotions.findAll({
        where: {
          isActive: true
        }
      });
    }
  
    static findExpiredPromotions() {
      // findExpiredPromotions(): Finds and returns all expired promotions in the database.
      return Promotions.findAll({
        where: {
          isActive: false,
          expirationDate: {
            [Op.lt]: new Date()
          }
        }
      });
    }
    static createPromotion(promotionData) {
     // createPromotion(promotionData): Creates a new
    //  promotion in the database with the provided data.
      return Promotions.create(promotionData);
    }
  
    static updatePromotion(id, promotionData) {
      // updatePromotion(id, promotionData): Updates the promotion with the given
      // ID in the database with the provided data.
      return Promotions.update(promotionData, {
        where: {
          id: id
        }
      });
    }
  
    static destroyPromotion(id) {
      // destroyPromotion(id): Deletes the promotion with the given ID from the database.
 
      return Promotions.destroy({
        where: {
          id: id
        }
      });
    }
  
    
  }
  Promotions.init({
    // Model attributes are defined here
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
    sequelize,// We need to pass the connection instance
    modelName: 'Promotions',// We need to choose the model name
  });
  return Promotions;
};