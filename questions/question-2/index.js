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

  let word = "";

  for(let i = input.length - 1; i >= 0; i--){
    
    word += input[i];
  }
  return word;
}

window.exercice2 = () => {
  const input = 'Hello';
  return window.generateExercice(reverseString, input);
}
