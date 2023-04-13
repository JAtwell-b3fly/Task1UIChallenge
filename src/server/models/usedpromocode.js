'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsedPromoCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    // Finder methods

// Find all used promo codes
static async findAllUsedPromoCodes() {
  // findAllUsedPromoCodes(): Finds and returns all used promo codes in the database.
  try {
    const usedPromoCodes = await UsedPromoCode.findAll();
    return usedPromoCodes;
  } catch (error) {
    throw new Error('Failed to find all UsedPromoCodes');
  }
}

// Find used promo codes by user ID
static async findUsedPromoCodesByUserId(userId) {
  //findUsedPromoCodesByUserId(userId): Finds and returns used promo codes 
  // associated with a specific user ID.
  try {
    const usedPromoCodes = await UsedPromoCode.findAll({ where: { user_id: userId } });
    return usedPromoCodes;
  } catch (error) {
    throw new Error('Failed to find UsedPromoCodes by user ID');
  }
}

// Find used promo codes by order ID
static async findUsedPromoCodesByOrderId(orderId) {
  // findUsedPromoCodesByOrderId(orderId): Finds and returns used
  //  promo codes associated with a specific order ID.
  try {
    const usedPromoCodes = await UsedPromoCode.findAll({ where: { order_id: orderId } });
    return usedPromoCodes;
  } catch (error) {
    throw new Error('Failed to find UsedPromoCodes by order ID');
  }
}

// Create a new used promo code
static async createUsedPromoCode(promoId, userId, orderId, usedAt) {
  // createUsedPromoCode(promoId, userId, orderId, usedAt): Creates a 
  // new used promo code record in
   // the database with the provided promo ID, user ID, order ID, and used timestamp.
  try {
    const usedPromoCode = await UsedPromoCode.create({ promo_id: promoId, user_id: userId, order_id: orderId, used_at: usedAt });
    return usedPromoCode;
  } catch (error) {
    throw new Error('Failed to create UsedPromoCode');
  }
}

// Update a used promo code by ID
static async updateUsedPromoCode(id, promoId, userId, orderId, usedAt) {
  // updateUsedPromoCode(id, promoId, userId, orderId, usedAt): 
  // Updates an existing used promo code record in the database with the provided promo ID,
   // user ID, order ID, and used timestamp, based on the record's ID.
  try {
    const usedPromoCode = await UsedPromoCode.update(
      { promo_id: promoId, user_id: userId, order_id: orderId, used_at: usedAt },
      { where: { id } }
    );
    return usedPromoCode;
  } catch (error) {
    throw new Error('Failed to update UsedPromoCode');
  }
}

// Destroy a used promo code by ID
static async destroyUsedPromoCode(id) {
  // destroyUsedPromoCode(id): Deletes an existing used promo code record from the
  //  database based on the record's ID.
  try {
    const result = await UsedPromoCode.destroy({ where: { id } });
    return result;
  } catch (error) {
    throw new Error('Failed to destroy UsedPromoCode');
  }
}
  }
  UsedPromoCode.init({
       // Model attributes are defined here
    promo_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    used_at: DataTypes.DATE
  }, {
    sequelize,// We need to pass the connection instance
    modelName: 'UsedPromoCode',// We need to choose the model name
  });
  return UsedPromoCode;
};