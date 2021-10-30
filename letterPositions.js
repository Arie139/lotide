const letterPositions = function(sentence) {
  const results = {}
  let senArray = Array.from(sentence)
  for (let i = 0; i < senArray.length; i++){
    const currentLetter = senArray[i];
    if (!results[currentLetter]) {
      results[currentLetter] = [i];
    } else {
      results[currentLetter].push(i);
    }
  } 
  return results; 
}