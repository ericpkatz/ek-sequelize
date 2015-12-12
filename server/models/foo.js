var Sequelize = require('sequelize');
var db = require('../config/db').db(); 

var Foo = db.define('foo', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  bizz: Sequelize.STRING
});

module.exports = Foo;
