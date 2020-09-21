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

const sum = input.reduce((accumulator,currentValue) => accumulator + currentValue);

  return sum;

}

window.exercice1 = () => {
  const input = [1, 2, 3, 4, 5,6,7];
  return window.generateExercice(sumArray, input);
}


