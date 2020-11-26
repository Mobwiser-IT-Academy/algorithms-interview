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
  // FIXME: Add your logic here

  let a = wordA.split("").sort();
  let b = wordB.split("").sort();

  for(let i = 0; i < a.length; i++){
     if(a[i] !== b[i]){
       return false;
     }
     return true;
  }
}

window.exercice3 = () => {
  const wordA = 'cinema';
  const wordB = 'iceman';
  return window.generateExercice(checkAnagram, wordA, wordB);
}
