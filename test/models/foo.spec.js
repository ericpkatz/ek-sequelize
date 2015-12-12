var expect = require('chai').expect;
var db = require('../../server/config/db');
var Foo = require('../../server/models').Foo;

describe('Foo', function(){

  beforeEach(function(done){
    db.init(done);
  });

  var foo;
  beforeEach(function(done){
    Foo.create({ color: 'blue', name: 'bar', bizz: 'buzz'})
      .then(function(_foo){
        foo = _foo;
        done();
      });
  });

  it('I can create a foo with a color of blue', function(){
    expect(foo.color).to.eq('blue');
  });

  it('I can create a foo with a name of bar', function(){
    expect(foo.name).to.eq('bar');
  });

  it('I can create a foo with a bizz of buzz', function(){
    expect(foo.bizz).to.be.ok;
  });

});
