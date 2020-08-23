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

  let occurs = list.length;
  let sum = 0;

  for (let i = 0; i < occurs; i++){
      sum += list[i];       
  }

  let average = sum/occurs;

  return average;
}

window.exercice4 = () => {
  const input = [1,2,3,4,5,6];
  return window.generateExercice(checkAverage, input);
}
