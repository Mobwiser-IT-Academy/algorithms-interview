/**
 * Simple array sum
 * Change the function "sumArray".
 * This function should receive an array of integers and returns the sum of those numbers.
 *
 * Example:
 *  Input: [1,2,3,4,5]
 *  Output: 15
 *
 * @returns number
 */
function sumArray(inputs) {
  const input = inputs[0];
  return inputs[0].reduce((a, b) => a + b, 0);
 
  // FIXME: Create a variable that recieves the input and uses the parameter ".reduce" that makes the sum of all the numbers on the array, the aparameter adds 2 numbers then does the sum of the result of the first sum and adds the next number in the array and does that until the array ends
}

window.exercice1 = () => {
  const input = [1, 2, 3, 4, 5];
  return window.generateExercice(sumArray, input);
}
