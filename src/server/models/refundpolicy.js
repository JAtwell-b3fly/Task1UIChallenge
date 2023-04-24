'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RefundPolicy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    
   //finder Methods
   
    static findAllPolicies() {
      // findAllPolicies(): Finds all RefundPolicy instances in the
      // database and returns them as an array.
      return RefundPolicy.findAll();
    }
  
    static findPolicyById(id) {
      // findPolicyById(id): Finds a RefundPolicy instance with the specified id and returns it. 
      // Returns null if no instance is found.
      return RefundPolicy.findByPk(id);
    }
  
    static createPolicy(policy) {
      // createPolicy(policy): Creates a new RefundPolicy instance with the specified
      // data and saves it to the database. Returns the created instance.
      return RefundPolicy.create(policy);
    }
  
    static updatePolicy(id, policy) {
      // updatePolicy(id, policy): Updates the RefundPolicy instance with the specified id 
      // with the new data specified in the policy object. Returns the
      // number of affected rows (which should be 1 if the instance is found and updated successfully).

      return RefundPolicy.update(policy, {
        where: {
          id
        }
      });
    }
  
    static destroyPolicy(id) {
      // destroyPolicy(id): Deletes the RefundPolicy instance with the specified id 
      // from the database. Returns 
      // the number of affected rows (which should be 1 if the instance is found and deleted successfully).
      return RefundPolicy.destroy({
        where: {
          id
        }
      });
    }
  }
  RefundPolicy.init({
    // Model attributes are defined here
    policy_text: DataTypes.TEXT
  }, {
    sequelize, // We need to pass the connection instance
    modelName: 'RefundPolicy',// We need to choose the model name
    tableName: 'RefundPolicies',
    timestamps: true,
  });
  return RefundPolicy;
};