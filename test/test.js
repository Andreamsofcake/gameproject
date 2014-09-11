var chai = require('chai');
var expect = chai.expect;

var functions = require('../User');
var whereCanIGo = functions.whereCanIGo;



describe('whereCanIGo()', function() {
  it('tell us which directions are available', function() {
    var result = whereCanIGo();
    expect(result).to.eql([0]);
  });
});