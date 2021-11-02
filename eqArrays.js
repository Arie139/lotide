const assertEqual = require('./assertEqual');

const eqArrays = function(someArray1,someArray2) {
  if (Array.isArray(someArray1) && Array.isArray(someArray2)){
    for (let i = 0; i < someArray1.length; i++){
      for (let j = 0; j < someArray2.length; j++){
        if (someArray1[i] === someArray2[j]){
          return true;
        } else {
          return false;
        }
      }  
    }
  } else {
    return false;
  } 
};
module.exports = eqArrays;
