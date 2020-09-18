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
<<<<<<< HEAD


  var number = list.pop();

 list.unshift(number);

return(list)

}

window.exercice5 = () => {
  
=======
}

window.exercice5 = () => {
>>>>>>> 0dc46e7c8593d062579547d299466e532abe1790
  const list = [1,2,3,4,5];
  const n = 2;
  return window.generateExercice(rotateList, list, n);
}
