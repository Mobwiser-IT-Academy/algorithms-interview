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
<<<<<<< HEAD

  let sum = list.reduce((accumulator, currentValue) => accumulator + currentValue);

  let average = sum / list.length;

  return average;
=======
>>>>>>> 0dc46e7c8593d062579547d299466e532abe1790
}

window.exercice4 = () => {
  const input = [1,2,3,4,5,6];
  return window.generateExercice(checkAverage, input);
}
