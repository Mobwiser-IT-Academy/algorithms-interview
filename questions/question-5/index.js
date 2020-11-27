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
  // FIXME: Add your logic here

  let i = 0;

  while(i < counter){
    list.unshift(list.pop());
    i++;
  }
  return list;
}

window.exercice5 = () => {
  const list = [1,2,3,4,5];
  const n = 2;
  return window.generateExercice(rotateList, list, n);
}
