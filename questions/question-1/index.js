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
  // FIXME: Add your logic here
  for (let i = 0; i < input[5]; i++){
    input[i] += 1;
  }
}

window.exercice1 = () => {
  const input = [1, 2, 3, 4, 5];
  return window.generateExercice(sumArray, input);
}
