var env = process.env.NODE_ENV || 'development';
var environments = {
  test: {
    //CONN: 'postgres:localhost/foobardb' 
    CONN: 'postgres:localhost/circle_test' 
  },
  development: {
  
  },
  productions: {
  
  }

};
module.exports = function(key){
  return environments[env][key] || process.env.key;
}
