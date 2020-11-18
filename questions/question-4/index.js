/**
 * Reverse string
 * Change the function "checkAverage".
 * This function should receives an array of integers and returns the average of those numbers
 *
 *
 * Example:
 *  Input: [1,2,3,4,5]
 *  Output: 3
 *
 *
 * @returns boolean
 */
function checkAverage(inputs) {
  const list = inputs[0];
  return list.reduce((sum, arr) => sum + arr) / list.length;
}

window.exercice4 = () => {
  const input = [1,2,3,4,5,6];
  return window.generateExercice(checkAverage, input);
}
