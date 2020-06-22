/**
 * Reverse string
 * Change the function "rotateList".
 * This function should receives an array of integers and rotates the array "n" items
 *
 *
 * Example:
 *  Inputs: ([1,2,3,4,5], 2)
 *  Output: [4,5,1,2,3]
 *
 *
 * @returns boolean
 */
function rotateList(inputs) {
  const list = inputs[0];
  const counter = inputs[1];

  let i=1 
  while (i<inputs[1]) {
    inputs[0].unshift(inputs[0].pop())
    i++
  }
  return inputs[0];
  // FIXME: Use the ".unshift" that adds an element to the begining of the array, and you add the number that you got from the ".pop" that take the last element of the array
}

window.exercice5 = () => {
  const list = [1,2,3,4,5];
  const n = 2;
  return window.generateExercice(rotateList, list, n);
}
