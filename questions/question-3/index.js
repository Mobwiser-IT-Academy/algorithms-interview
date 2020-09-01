/**
 * Reverse string
 * Change the function "checkAnagram".
 * This function should receives two string and check whether those strings are anagrams
 *
 * What is an anagram?
 * A word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
 *
 * Example:
 *  Input: cinema, iceman
 *  Output: true
 *
 *  Input: listen, silent
 *  Output: true
 *
 * @returns boolean
 */
function checkAnagram(inputs) {
  const wordA = inputs[0];
  const wordB = inputs[1];
  let arrayA = [];
  let arrayB = [];
  for(let i = 0; i<wordA.length; i++) {
    if(!arrayA.includes(wordA.substring(i, i+1))) {
      arrayA.push(wordA.substring(i,i+1));
      arrayA.push(1);  
    }
    else {
      let index = arrayA.indexOf(wordA.substring(i,i+1));
      arrayA[index+1] += 1; 
    }
  }
  for(let i = 0; i<wordB.length; i++) {
    if(!arrayB.includes(wordB.substring(i, i+1))) {
      arrayB.push(wordB.substring(i,i+1));
      arrayB.push(1);  
    }
    else {
      let index = arrayB.indexOf(wordB.substring(i,i+1));
      arrayB[index+1] += 1; 
    }
  }
  if(!wordB.length == wordA.length) {
    return false;
  }
  else {
    for(let i = 0; i<arrayB.length; i++) {
      if(!arrayA.includes(arrayB[i])) {
        return false;
      }
      let index = arrayA.indexOf(arrayB[i]);
      if(!arrayA[index+1] === arrayB[i+1]) {
        return false;
      }
    }
  }
  return true;

}

window.exercice3 = () => {
  const wordA = 'cinema';
  const wordB = 'iceman';
  return window.generateExercice(checkAnagram, wordA, wordB);
}
