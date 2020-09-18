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
  // FIXME: Add your logic here
  return input.split("").reverse().join("");
}

window.exercice2 = () => {
  const input = 'hello';
  return window.generateExercice(reverseString, input);
}
gene