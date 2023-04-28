'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Avatars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Avatars.belongsTo(models.User, { foreignKey: 'user_id' });
    }

    // Finder methods
    
    static findAllAvatars() {
    //findAllAvatars(): Returns all avatars.
      return Avatars.findAll();
    }
  
    static findAvatarById(id) {
      //findAvatarById(id): Returns the avatar with the specified id.
      return Avatars.findByPk(id);
    }
  
    static createAvatar(avatar) {
    //createAvatar(avatar): Creates a new avatar with the specified data.
      return Avatars.create(avatar);
    }
  
    static updateAvatar(id, avatar) {
      //updateAvatar(id, avatar): Updates the avatar with the specified id with the provided data.
      return Avatars.update(avatar, {
        where: {
          id
        }
      });
    }
  
    static destroyAvatar(id) {
     //destroyAvatar(id): Deletes the avatar with the specified id.
      return Avatars.destroy({
        where: {
          id
        }
      });
    }
  }
  Avatars.init({
  // Model attributes are defined here
    user_id: DataTypes.INTEGER,
    avatar_name: DataTypes.STRING,
    avatar_image: DataTypes.STRING
  }, {
    sequelize,  // We need to pass the connection instance
    modelName: 'Avatars',// We need to choose the model name
    underscored: true
    // modelName:'User'
  });
  return Avatars;
};