/* globals describe it */
var expect = require('chai').expect;
var db = require('../../../server/config/db'); 

describe('connecting to db', function(){

  it('exists', function(){
    expect(db).to.be.ok;
  });
});
