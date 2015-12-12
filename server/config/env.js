var env = process.env.NODE_ENV || 'development';
var environments = {
  test: {
    CONN: 'postgres:localhost/foobardb' 
  },
  development: {
  
  },
  productions: {
  
  }

};
module.exports = function(key){
  return environments[env][key] || process.env.key;
}
