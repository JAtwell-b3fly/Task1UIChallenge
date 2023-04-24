'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductIngredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    // Finder Methods
    
// Find all product ingredients
static async findAllProductIngredients() {
  try {
    const productIngredients = await ProductIngredient.findAll();
    return productIngredients;
  } catch (error) {
    throw new Error('Failed to fetch ProductIngredients');
  }
}

// Find product ingredients by product_id
static async findProductIngredientsByProductId(productId) {
  try {
    const productIngredients = await ProductIngredient.findAll({ where: { product_id: productId } });
    return productIngredients;
  } catch (error) {
    throw new Error('Failed to fetch ProductIngredients');
  }
}
// Create a new product ingredient
static async createProductIngredient(productId) {
  try {
    const productIngredient = await ProductIngredient.create({ product_id: productId });
    return productIngredient;
  } catch (error) {
    throw new Error('Failed to create ProductIngredient');
  }
}

// Update a product ingredient by ID
static async updateProductIngredientById(productIngredientId, updatedData) {
  try {
    const [numAffectedRows, affectedRows] = await ProductIngredient.update(updatedData, {
      where: { id: productIngredientId },
      returning: true
    });
    if (numAffectedRows === 0) {
      throw new Error('ProductIngredient not found');
    }
    return affectedRows[0];
  } catch (error) {
    throw new Error('Failed to update ProductIngredient');
  }
}

// Delete a product ingredient by ID
static async deleteProductIngredientById(productIngredientId) {
  try {
    const numAffectedRows = await ProductIngredient.destroy({ where: { id: productIngredientId } });
    if (numAffectedRows === 0) {
      throw new Error('ProductIngredient not found');
    }
    return true;
  } catch (error) {
    throw new Error('Failed to delete ProductIngredient');
  }
}
  }
  ProductIngredient.init({
       // Model attributes are defined here
    product_id: DataTypes.INTEGER
  }, {
    sequelize,// We need to pass the connection instance
    modelName: 'ProductIngredient',// We need to choose the model name
  });
  return ProductIngredient;
};