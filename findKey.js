const assertEqual = require('./assertEqual');

const findKey = function(obj,callback) {
    const keyVal = Object.keys(obj);
    for (key of keyVal){
      if (callback(obj[key])) {
        return key;
      }
    }
};

module.exports = findKey;