/**
 * Reverse string
 * Change the function "checkAnagram".
 * This function should receives two string and check whether those strings are anagrams
 *
 * What is an anagram?
 * A word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
 *
 * Example:
 *  Input: cinema, iceman
 *  Output: true
 *
 *  Input: listen, silent
 *  Output: true
 *
 * @returns boolean
 */
function checkAnagram(inputs) {
  const wordA = inputs[0];
  const wordB = inputs[1];
  // FIXME: Add your logic here

  let arrayA = [];
  let arrayB = [];

  let maxLengthA = wordA.length;
  let maxLengthB = wordB.length;

  let checkAnagram = false; 

  if (wordA != wordB ){
      if ( maxLengthA == maxLengthB){
          turnWordArrayA(wordA);
          arrayA = turnWordArrayA(wordA);
          
          turnWordArrayB(wordB);
          arrayB = turnWordArrayB(wordB);
          
          compareAnagrams(arrayA,arrayB);
          
          checkAnagram = compareAnagrams(arrayA,arrayB);
          
      }else {
          console.log('the Words have different Length')
      }
  }else {
      console.log('the Words are the same')
  }


  function turnWordArrayA(wordA){
      let wordArrayA = [];
      for (let i = 0; i < wordA.length; i++){
          wordArrayA[i] =  wordA[i];
      }
      return wordArrayA; 
  }


  function turnWordArrayB(wordB){
      let wordArrayB = [];
      for (let i = 0; i < wordB.length; i++){
          wordArrayB[i] =  wordB[i];
      }
      return wordArrayB; 
  }


  function compareAnagrams(anagramA, anagramB){
      let contEquals = 0;
      
      for (let i = 0; i < anagramA.length; i++){
          contEquals = 0;
          for (let j = 0; j < anagramB.length; j++){
              if (anagramA[i] === anagramB[j]){
                  contEquals ++;
                  if ( contEquals > 1){
                      return false;           
                  }
              }        
          }         
      }
      return true;
  } 

  return checkAnagram;

}

window.exercice3 = () => {
  const wordA = 'cinema';
  const wordB = 'iceman';
  return window.generateExercice(checkAnagram, wordA, wordB);
}
