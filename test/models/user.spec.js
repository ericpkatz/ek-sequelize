var expect = require('chai').expect;
var db = require('../../server/config/db');
var User = require('../../server/models').User;

describe('User', function(){

  var user;

  beforeEach(function(done){
    db.init(done);
  });

  beforeEach(function(done){
    User.create({ firstName: 'eric', lastName: 'katz'})
      .then(function(_user){
        user = _user;
        done();
      });
  });

  it('The users first name is eric', function(){
    expect(user.firstName).to.eq('eric');
  });

  it('The users first name is eric', function(){
    expect(user.lastName).to.eq('katz');
  });

  it('The users full name is eric katz', function(){
    expect(user.fullName).to.eq('eric katz');
  });

});
