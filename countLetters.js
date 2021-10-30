const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed:${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`❌❌❌Assertion Failed:${actual} !== ${expected}`);
  }
};

const countLetter = function (strings) {
  const results = {};
  for (string of strings){
    if (results[string]) {
      results[string] += 1;
    } else {
      results[string] = 1;
    }
  }
  return results;
};

console.log(countLetter('lighthouse'));