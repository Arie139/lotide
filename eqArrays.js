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
