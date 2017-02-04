/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  AB Check                                                                            *
*  Using the JavaScript language, have the function ABCheck(str) take the str          *
*  parameter being passed and return the string true if the characters a and b are     *
*  separated by exactly 3 places anywhere in the string at least once                  *
*  (ie. "lane borrowed" would result in true because there is exactly three characters *
*  between a and b). Otherwise return the string false.                                *

***************************************************************************************/

/*
Rewritten Prompt: We are given a string. return true if there is an a and b seperated
by three spaces at least once

Solution:
1. initialize 'output' variable, and assign it a search function
  1a. search the string using a regular expression, see if there is an 'a' and b are
  separated by three spaces
2. return true if output is greater than -1 (a...b is found)

*/

function ABCheck(str){
  
  //search for a to b separated by 3 spaces
  var aToB = str.search(/a...b/)
  
  //search for b to a separated by 3 spaces
  var bToA = str.search(/b...a/)
  

  return aToB > -1 || bToA > -1
}

console.log(ABCheck("lbne aorrowed"))