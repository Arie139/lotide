const assertEqual = require('./assertEqual');

const tail = function(someArray1) {
  if (someArray1.length === 0 || someArray1.length === 1) {
    return [];
  } else {
    return someArray1.slice(1);
  }
};
console.log(tail([1,2,3]))
module.exports = tail;
