const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed:${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`❌❌❌Assertion Failed:${actual} !== ${expected}`);
  }
};
const eqArrays = function(someArray1,someArray2) {
  for (let i = 0; i < someArray1.length; i++){
    for (let j = 0; j < someArray2.length; j++){
      if (someArray1[i] === someArray2[j]){
        return true;
      } else {
        return false;
      }
    }
  }
};

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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
};