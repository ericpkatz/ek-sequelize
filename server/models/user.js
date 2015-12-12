var Sequelize = require('sequelize');
var db = require('../config/db').db(); 

var model = db.define('user', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  fullName: {
    type: new Sequelize.VIRTUAL(Sequelize.STRING, ['firstName', 'lastName']),
    get: function(){
      return this.get('firstName') + ' ' +this.get('lastName');
    }
  }
});

module.exports = model;
