const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(someArray1,someArray2) {
 return assertEqual(eqArrays(someArray1, someArray2), true)
  
};
module.exports = assertArraysEqual;