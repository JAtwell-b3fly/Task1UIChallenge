'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    
    // Finder methods
  static findAllUsers() {
   // findAllUsers(): This method returns all the users in the database. It uses the findAll() 
  //  method provided by Sequelize to retrieve all the rows in the users table.
    return User.findAll();
  }

  static findUserById(id) {
   // findUserById(id): This method finds a user in the database by their id. It uses the findByPk()
   // method provided by Sequelize to retrieve the row with the specified id.

    return User.findByPk(id);
  }

  static createUser(user) {
    //createUser(user): This method creates a new user in the database. It uses the create() 
   // method provided by Sequelize to insert a new
    // row in the users table with the specified data in the user parameter.
    return User.create(user);
  }

  static updateUser(id, user) {
    // updateUser(id, user): This method updates a user in the database by their id.
     // It uses the update() method provided by Sequelize to update the row 
   //   with the specified id with the data in the user parameter.
    return User.update(user, {
      where: {
        id
      }
    });
  }

  static destroyUser(id) {
    //destroyUser(id): This method deletes a user from the database by their id. 
    //It uses the destroy() method provided
    // by Sequelize to delete the row with the specified id from the users table.
    return User.destroy({
      where: {
        id
      }
    });
  }
  }
  
  User.init({
    // Model attributes are defined here
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
  });
  return User;
};