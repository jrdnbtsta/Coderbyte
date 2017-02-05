/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Ex Oh                                                                               *
*  Using the JavaScript language, have the function ExOh(str) take the str parameter   *
*  being passed and return the string true if there is an equal number of x's and o's, *
*  otherwise return the string false. Only these two letters will be entered in the    *
*  string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the    *
*  output should return false because there are 6 x's and 5 o's.                       *
*                                                                                      *
***************************************************************************************/

/*
Rewritten Prompt: Given a string of a number of X's and O's, return true if there is
an equal amount of each letter

Solution:
1. initialize a counter for both X's and O's
2. iterate through entire string, starting from the first index
  2a. if the current iteration is an 'X', add one to the x counter
  2b. if the current iteration is an 'O', add one to the o counter
3. return true if the x counter and o counter are equivelant 
*/


function ExOh(str){
  var oCount = 0;
  var xCount = 0;
  
  for(i=0; i<str.length; i++){
    str[i] === 'x' ? xCount++ : oCount++
  }
  
  return oCount === xCount
  
}

console.log(ExOh("xoxoo"))