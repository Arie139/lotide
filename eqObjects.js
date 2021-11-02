const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const obj1KeyLen = Object.keys(object1);
  const obj2KeyLen = Object.keys(object2);
  if (Array.isArray(obj1KeyLen) && Array.isArray(obj2KeyLen)){
    return eqArrays(obj1KeyLen, obj2KeyLen);
  } else if (obj1KeyLen.length !== obj2KeyLen.length) {
    return false;
  } else {
    for (key of obj1KeyLen) {
      if (object1[key] === object2[key]){
        return true;
      } else {
        return false
      }  
    }
  }
};

module.exports = eqObjects;