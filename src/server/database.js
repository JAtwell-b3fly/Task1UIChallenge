const Sequelize = require('sequelize');
const sequelize = new Sequelize('products_db', 'admin', 'Pa55w0rd123!', {
  host: 'localhost',
  dialect: 'mysql',
});
