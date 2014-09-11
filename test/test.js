var chai = require('chai');
var expect = chai.expect;

var functions = require('../User');
var whereCanIGo = functions.whereCanIGo;



describe('whereCanIGo()', function() {
  it('tell us which directions are available', function() {
    var champagneRoom = {
      name: 'Champagne Room',
      east: 'Bathroom',
      west: 'Balcony',
      north: null,
      south: null
    }
    var result = whereCanIGo(champagneRoom);
    expect(result).to.eql(['east', 'west']);

    it('tells us how many doors are available', function() {
      var chamberOfSecrets = {
      name: 'C',
      north: null,
      east: null,
      south: null,
      west: 'B'
    }
    var result = whereCanIGo(chamberOfSecrets);
    expect(result).to.eql([result.length]);
    });
  });
});