const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed:${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`❌❌❌Assertion Failed:${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj,value){
const keyVal = Object.keys(obj);
  for (key of keyVal){
    if (obj[key] === value) {
    return key;
    }
  }
}
