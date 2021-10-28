const midOdd = function(array1) {
  let midOddPoint = Math.ceil(array1.length / 2);
  return array1.slice(midOddPoint - 1, midOddPoint);
}

const midEven = function(array2) {
  let midEvenPoint = (array2.length / 2)
  return array2.slice(midEvenPoint - 1, midEvenPoint + 1); 
}
const middle = function(array) {
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return [];
  } else if (array.length % 2 !== 0 ) {
      return midOdd(array);
  } else if (array.length % 2 === 0) {
      return midEven(array);
  }
}
