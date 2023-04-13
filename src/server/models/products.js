'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    
    //Finder methods
    static async getAllProducts() {
      //findAllProducts: This is a static method that returns all products in the database. 
      // It uses the findAll method provided by Sequelize.
      const products = await this.findAll();
      return products;
    }
  
    static async getProductById(id) {
      //findProductById: This is a static method that takes a product ID as an argument and
      // returns the product with that ID. It uses the findByPk method provided by Sequelize.
      const product = await this.findByPk(id);
      return product;
    }
  
    static async createProduct(data) {
      //createProduct: This is a static method that takes an object representing a new product as an 
      //argument and creates a new product record in the database. It uses the create method provided by Sequelize.
      const product = await this.create(data);
      return product;
    }
  
    static async updateProductById(id, data) {
      //updateProductById: This is a static method that takes a product ID and an object representing updated product data as arguments. It updates the 
      //corresponding product record in the database with the new data. It uses the update method provided by Sequelize.
      const [rowsAffected, [updatedProduct]] = await this.update(data, {
        where: { id },
        returning: true,
      });
      return updatedProduct;
    }
  
    static async deleteProductById(id) {
     // deleteProductById: This is a static method that takes a product ID as an argument and deletes the corresponding 
    //  product record from the database. It uses the destroy method provided by Sequelize.
      const product = await this.findByPk(id);
      await product.destroy();
      return true;
    }
  
  }
  Products.init({
    // Model attributes are defined here
    category_id: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    short_description: DataTypes.TEXT,
    long_description: DataTypes.TEXT,
    product_price: DataTypes.DECIMAL,
    product_rating: DataTypes.DECIMAL,
    product_review: DataTypes.TEXT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize, // We need to pass the connection instance
    modelName: 'Products', // We need to choose the model name
    modelName: 'categories' // We need to choose the model name
  });
  return Products;
};


