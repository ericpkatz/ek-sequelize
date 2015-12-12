var Sequelize = require('sequelize');
console.log(process.env.NODE_ENV);

//var _db = new Sequelize('postgres:localhost/foobardb');
var _db = new Sequelize(require('./env')('CONN'));

module.exports = {
  db: function(){
    return _db;
  },
  init: function(done){
    _db.sync({force: true})
      .then(function(){
         return done();
       })
       .catch(function(err){
        throw err;
      });
  }
};
