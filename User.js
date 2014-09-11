/**
*Find which option are available for the current room.
*
*@param {input} array of "rooms"
*
*@param {function} 'whereDoesTheGameStart' if the room has an 
'entrance', this is the 'entrance'.
*@returns {string} entrance
*
*@param {function} 'whereCanIGo' if direction is not null 
* then push to new array which is 'directions available'
*@returns {array} directions available
*
*@param {function} 'howManyDoorsAreAvailable' how many directions
* are available from 'directions available'.
*@returns {number} number of doors
*
*@param {function} 'whereDoesThatDirectionGo' from direction select, 
what is the 'new room' 
*@returns {string} new room
*
*@param {function} 'whereDoesTheGameEnd' if the room has a treasure, 
* then this room is where "a winner is you"
*@returns {string} treasure room 
*
**/

var whereDoesTheGameStart = function(rooms) {
  if (rooms) {
    entrance.name
  }
  // for each array item check for entrance
  //   what is the name for the room where entrance is true
  return;
};

var whereCanIGo = function (room) {
  var newArray = [];

  if (room.east) { 
    newArray.push('east'); 
  }
  if (room.north) {
    newArray.push('north');
  }
  if (room.south) { 
    newArray.push('south');  
  }
  if (room.west) {
    newArray.push('west');
  }
  return newArray;

};

var howManyDoorsAreAvailable = function (room) {
  var directions = whereCanIGo(room);

  return directions.length; 

};

var whereDoesThatDirectionGo = function (room, direction)  {
  var newRoom = room[direction];
  return newRoom;
};


module.exports = {
  whereCanIGo: whereCanIGo,
  howManyDoorsAreAvailable: howManyDoorsAreAvailable,
  whereDoesThatDirectionGo: whereDoesThatDirectionGo,
  whereDoesTheGameStart: whereDoesTheGameStart
};
