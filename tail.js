const assertEquals = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed:${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`❌❌❌Assertion Failed:${actual} !== ${expected}`);
  }
};

const head = function(someArray) {
  return console.log(someArray[0]);
};

const tail = function(someArray1) {
  if (someArray1.length === 0 || someArray1.length === 1) {
    return console.log([])
  } else {
    return console.log(someArray1.slice(1));
  }
};