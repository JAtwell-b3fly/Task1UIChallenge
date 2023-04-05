'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    // Finder methods
    static findAllSessions() {
      // findAllSessions(): returns all sessions.
      return Session.findAll();
    }
  
    static findSessionById(id) {
      // findSessionById(id): returns the session with the specified id.
      return Session.findByPk(id);
    }
  
    static createSession(session) {
      // createSession(session): creates a new session with the specified data.
      return Session.create(session);
    }
  
    static updateSession(id, session) {
      // updateSession(id, session): updates the session with the specified
      // id with the specified data.
      return Session.update(session, {
        where: {
          id
        }
      });
    }
  
    static destroySession(id) {
      // destroySession(id): deletes the session with the specified id.
      return Session.destroy({
        where: {
          id
        }
      });
    }
  }
  Session.init({
    // Model attributes are defined here
    user_id: DataTypes.INTEGER,
    session_data: DataTypes.TEXT,
    token: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize, // We need to pass the connection instance
    modelName: 'Session',// We need to choose the model name
    tableName: 'Sessions',// We need to choose the table  name
    timestamps: true,
    underscored: true
  });
  return Session;
};