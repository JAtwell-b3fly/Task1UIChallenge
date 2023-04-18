'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
    // Finder Methods
    static getAllCategories() {
      // getAllCategories(): Retrieves all categories from the database.
      return Categories.findAll();
    }
  
    static getCategoryById(categoryId) {
      // getCategoryById(categoryId): Retrieves a category by its ID.
      return Categories.findOne({
        where: {
          id: categoryId
        }
      });
    }
  
    static createCategory(categoryData) {
      // createCategory(categoryData): Creates a new category record in
      // the database with the given data.
      return Categories.create(categoryData);
    }
  
    static updateCategory(categoryId, categoryData) {
      // updateCategory(categoryId, categoryData): Updates an existing category record in the database with 
      // the given data, based on the category's ID.
      return Categories.update(categoryData, {
        where: {
          id: categoryId
        }
      });
    }
  
    static deleteCategory(categoryId) {
      // deleteCategory(categoryId): Deletes a category record from the 
      // database based on the category's ID.
      return Categories.destroy({
        where: {
          id: categoryId
        }
      });
    }
  }
  Categories.init({

     // Model attributes are defined here
    parent_id: DataTypes.INTEGER,
    category_name: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,// We need to pass the connection instance
    modelName: 'Categories', // We need to choose the model name
  });
  return Categories;
};