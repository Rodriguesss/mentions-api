const Sequelize = require('sequelize');

const connection = new Sequelize('apiNode', 'root', '10081999', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;