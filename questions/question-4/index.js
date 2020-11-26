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
  // FIXME: Add your logic here

  let average = list.reduce(function(a, b){
    return a + b / list.length;
  }, 0);

  return average;
}

window.exercice4 = () => {
  const input = [1,2,3,4,5,6];
  return window.generateExercice(checkAverage, input);
}
