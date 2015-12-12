var Sequelize = require('sequelize');
var db = require('../config/db').db(); 

var Bar = db.define('bar', {
  name: Sequelize.STRING,
  count: Sequelize.INTEGER,
  color: Sequelize.STRING
});

module.exports = Bar;
