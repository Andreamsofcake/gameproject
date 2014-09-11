/**
Find which option are available for the current room.

@{input} room
@{output} which directions are not null 
 if direction = null = true then  no print
 otherwise
 print direction
 */

module.exports.whereCanIGo = function (room) {
  var newArray = [];

  if (room.east) { 
    newArray.push('east') 
  }
  if (room.north) {
    newArray.push('north')
  }
  if (room.south) { 
    newArray.push('south') 
  }
  if (room.west) {
    newArray.push('west')
  }


  return newArray;
};