import {generateExercice} from "../../utils/util";
/**
 * Change the function "sumArray".
 * This function should receive an array of integers and returns the sum of those numbers.
 *
 * Example:
 *  Input: [1,2,3,4,5]
 *  Output: 15
 *
 * @returns {{output: number, input: number[]}}
 */
function sumArray(array) {}

export function exercice() {
  const input = [1, 2, 3, 4, 5];
  return generateExercice(input, sumArray);
}
