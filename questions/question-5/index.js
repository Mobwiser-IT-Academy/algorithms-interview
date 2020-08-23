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

  let lastItems = list.slice(list.length-counter, list.length+counter);

  function checkNumeric(){
      
      for (let x = 0; x < list.length; x++){
          Number.isInteger(list[x])
          
          if (Number.isInteger(list[x]) === false){
              return false
              
          }
      }
      return true
  }
  
  console.log(checkNumeric());
  
  if (checkNumeric() == true ){
      
      for (let i = 0; i < lastItems.length; i++){
          list.pop();    
      }
  
      for (let j = lastItems.length-1; j >= 0 ; j--){
          list.unshift(lastItems[j]);    
      }
  
      console.log(list);
      return list;
  
  }

}

window.exercice5 = () => {
  const list = [1,2,3,4,5];
  const n = 2;
  return window.generateExercice(rotateList, list, n);
}
