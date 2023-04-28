'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faqs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    
     // Finder Methods

    // Find all faqs
static async findAll() {
  // findAllFaqs: This method finds all the FAQs in the database.
  try {
    const faqs = await this.findAll();
    return faqs;
  } catch (err) {
    throw new Error(err.message);
  }
}

// Find a faq by ID
static async findById(id) {
  // findFaqById: This method finds a FAQ by its ID.
  try {
    const faq = await this.findByPk(id);
    return faq;
  } catch (err) {
    throw new Error(err.message);
  }
}

// Create a new faq
static async createNew(faqData) {
  // createFaq: This method creates a new FAQ in the database.
  try {
    const newFaq = await this.create(faqData);
    return newFaq;
  } catch (err) {
    throw new Error(err.message);
  }
}

// Update an existing faq by ID
static async updateById(id, faqData) {
  // updateFaq: This method updates an existing FAQ in the database.
  try {
    const [rowsUpdated, [updatedFaq]] = await this.update(faqData, {
      where: { id },
      returning: true,
    });
    if (!rowsUpdated) throw new Error('Faq not found');
    return updatedFaq;
  } catch (err) {
    throw new Error(err.message);
  }
}

// Delete a faq by ID
static async deleteById(id) {
  // deleteFaq: This method deletes a FAQ from the database.
  try {
    const rowsDeleted = await this.destroy({ where: { id } });
    if (!rowsDeleted) throw new Error('Faq not found');
    return true;
  } catch (err) {
    throw new Error(err.message);
  }
}

  }
  Faqs.init({
     // Model attributes are defined here
    question: DataTypes.STRING,
    answer: DataTypes.STRING
  }, {
    sequelize, // We need to pass the connection instance
    modelName: 'Faqs', // We need to choose the model name
  });
  return Faqs;
};