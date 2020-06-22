/**
 * Reverse string
 * Change the function "reverseString".
 * This function should receives a string and returns the reverse of that string
 *
 * Example:
 *  Input: Hello
 *  Output: olleH
 *
 * @returns string
 */
function reverseString(inputs) {
  const input = inputs[0];
  return inputs[0].split("").reverse().join("");
  // FIXME: Use the input "Hello" split it into letters, reverse the letter and join the reversed letters into a string again 
}

window.exercice2 = () => {
  const input = 'Hello';
  return window.generateExercice(reverseString, input);
}
