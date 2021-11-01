const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed:${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`❌❌❌Assertion Failed:${actual} !== ${expected}`);
  }
};

const findKey = function(obj,callback) {
    const keyVal = Object.keys(obj);
    for (key of keyVal){
      if (callback(obj[key])) {
        return key;
      }
    }
};
