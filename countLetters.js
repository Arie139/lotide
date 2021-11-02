const assertEqual = require('./assertEqual');

const countLetters = function (strings) {
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

module.exports = countLetters;
