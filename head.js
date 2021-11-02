const assertEqual = require('./assertEqual');

const head = function(someArray){
  return someArray[0];
}
assertEqual(head([1,2,3]),1)

module.exports = head;