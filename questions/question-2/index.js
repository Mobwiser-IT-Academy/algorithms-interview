/**
 * Reverse string
 * Change the function "reverseString".
 * This function should receives a string and returns the reverse of that string
 *
 * Example:
 *  Input: Hello
 *  Output: olleH
 *
 * @returns string
 */
function reverseString(inputs) {
  const input = inputs[0];
  let reverse = "";
  for(let i = input.length; i>0; i--) {
    if(i == input.length) {
      reverse += input.substring(i-1);
      
    }
    else {
      reverse += input.substring(i-1,i);
      
    }
  }
  return reverse // a primeiro estava a usar o metodo concat e só depois
                  //descobri que ele retorna uma nova string...
}

window.exercice2 = () => {
  const input = 'Hello';
  return window.generateExercice(reverseString, input);
}
