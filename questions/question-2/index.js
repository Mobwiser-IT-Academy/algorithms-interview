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
  return input.split('').reverse().join('');
}

window.exercice2 = () => {
  const input = 'Hello';
  return window.generateExercice(reverseString, input);
}
