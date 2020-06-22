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

return inputs[0].split("").sort().join("") === inputs[1].split("").sort().join("");
  // FIXME: Split both srings into letter, use the ".sort" to organize all the leter from a to z and join all the letter into a string again. Then compare both sorted strings and return true or false
}

window.exercice3 = () => {
  const wordA = 'cinema';
  const wordB = 'iceman';
  return window.generateExercice(checkAnagram, wordA, wordB);
}
