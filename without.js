const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function(anArray1,anArray2) {
  let arrayWithout = []
  for (let i = 0; i < anArray1.length; i++){
    for (let j = 0; j < anArray2.length; j++){
      if (anArray1[i] !== anArray2[j]) {
        arrayWithout.push(anArray1[i]);
        return arrayWithout;
      }
    }
  }    
}

module.exports = without;