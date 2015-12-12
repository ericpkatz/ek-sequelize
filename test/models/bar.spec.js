var expect = require('chai').expect;
var db = require('../../server/config/db');
var Bar = require('../../server/models').Bar;

describe('Bar', function(){

  var bar;

  beforeEach(function(done){
    db.init(done);
  });

  beforeEach(function(done){
    Bar.create({ count: 3, name: 'bar', color: 'brown'})
      .then(function(_bar){
        bar = _bar;
        done();
      });
  });

  it('I can create a bar with a count of 3', function(){
    expect(bar.count).to.eq(3);
  });

  it('I can create a bar with a name of bar', function(){
    expect(bar.name).to.eq('bar');
  });

  it('I can create a bar which is brown', function(){
    expect(bar.color).to.eq('brown');
  });


});
