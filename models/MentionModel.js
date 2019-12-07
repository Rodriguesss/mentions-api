const Sequelize = require('sequelize');
const connection = require('../database/database');

const Mention = connection.define('mention', {
  friend: {
    type: Sequelize.STRING,
    allowNull: false
  },
  mention: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

//Mention.sync({force: true});

module.exports = Mention;