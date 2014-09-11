/**
*Find which option are available for the current room.
*
*@{input} room
*@{function} if direction is not null then push to new array
*@{output} which directions are not null 
* 
**/

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
  whereDoesThatDirectionGo: whereDoesThatDirectionGo
};
