const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj,value){
const keyVal = Object.keys(obj);
  for (key of keyVal){
    if (obj[key] === value) {
    return key;
    }
  }
}

module.exports = findKeyByValue;