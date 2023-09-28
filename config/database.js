const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('travel', 'root', 'bhavya22', {
  host: 'localhost',
  dialect: 'mysql', // or 'postgresql', 'sqlite', etc.
});

module.exports = sequelize;
