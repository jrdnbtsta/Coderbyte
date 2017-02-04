/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Alphabet Soup                                                                       *
*  Have the function AlphabetSoup(str) take the str string parameter being passed      *
*  and return the string with the letters in alphabetical order                        *
*  (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be       *
*  included in the string.                                                             *
*                                                                                      *
***************************************************************************************/

/*
Rewritten Prompt: We are given a string. return the string with each letter in
alphabetical order

Solution:
1. split string into array
2. sort array
3. join array
4. return array

*/



function AlphabetSoup(str){
  
  var array = str.split('').sort().join('')
  
  return array
  
}

console.log(AlphabetSoup("hello"))