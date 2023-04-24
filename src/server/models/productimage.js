'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    // Finder Methods 
    
    static getAllProductImages(productId) {
      // getAllProductImages(productId): Retrieves all product images for a given product ID.
      return ProductImage.findAll({
        where: {
          product_id: productId
        }
      });
    }
  
    static getProductImageById(productImageId) {
      // getProductImageById(productImageId): Retrieves a product image by its ID.
      return ProductImage.findOne({
        where: {
          id: productImageId
        }
      });
    }
  
    static createProductImage(productImage) {
      // createProductImage(productImage): Creates a new product image record in 
      // the database with the given data.
      return ProductImage.create(productImage);
    }
  
    static updateProductImage(productImageId, productImageData) {
      // updateProductImage(productImageId, productImageData): Updates an existing product image record in 
      // the database with the given data, based on the product image's ID.
      return ProductImage.update(productImageData, {
        where: {
          id: productImageId
        }
      });
    }
  
    static deleteProductImage(productImageId) {
      // deleteProductImage(productImageId): Deletes a product image record from 
      // the database based on the product image's ID.
      return ProductImage.destroy({
        where: {
          id: productImageId
        }
      });
    }
  }
  ProductImage.init({
     // Model attributes are defined here
    product_id: DataTypes.INTEGER,
    image_url: DataTypes.STRING
  }, {
    sequelize,// We need to pass the connection instance
    modelName: 'ProductImage',// We need to choose the model name
  });
  return ProductImage;
};