var chai = require('chai');
var expect = chai.expect;

var functions = require('../User');
var whereCanIGo = functions.whereCanIGo;
var howManyDoorsAreAvailable = functions.howManyDoorsAreAvailable;
var whereDoesThatDirectionGo = functions.whereDoesThatDirectionGo;
var whereDoesTheGameStart = functions.whereDoesTheGameStart;


describe('whereCanIGo()', function() {
  it('tell us which directions are available', function() {
    var champagneRoom = {
      name: 'Champagne Room',
      east: 'Bathroom',
      west: 'Balcony',
      north: null,
      south: null
    };
    var result = whereCanIGo(champagneRoom);
    expect(result).to.eql(['east', 'west']);
  });

  it('tells us how many doors are available', function() {
    var chamberOfSecrets = {
      name: 'C',
      north: null,
      east: null,
      south: null,
      west: 'Champagne Room'
    };
    var result = howManyDoorsAreAvailable(chamberOfSecrets);
    expect(result).to.eql(1);
  });
  it('where does that direction go?', function () {
    var theTorturerChamber = {
      name: 'The Torturer Chamber',
      north: 'Champagne Room',
      east: null,
      west: null,
      south: 'Chamber Of Secrets'
    };
    var result = whereDoesThatDirectionGo(theTorturerChamber, 'north');
    expect (result).to.eql('Champagne Room');
  });
  it('where does the game start?', function () {
    var roomA = {
      name: 'B',
      north: 'E',
      east: 'C',
      west: 'A',
      south: null,
      entrance: 'south'
    };
    var roomB = { 
      name: 'The Torturer Chamber',
      north: 'Champagne Room',
      east: null,
      west: null,
      south: 'Chamber Of Secrets',
      treasure: true
    };
    var rooms = [roomA,roomB];
    var result = whereDoesTheGameStart(rooms);
    expect (result).to.eql('B');
  });

});