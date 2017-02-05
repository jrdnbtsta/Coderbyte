/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*                                                                                      *
*  Using the JavaScript language, have the function CheckNums(num1,num2) take both     *
*  parameters being passed and return the string true if num2 is greater than num1,    *
*  otherwise return the string false. If the parameter values are equal to each other  *
*  then return the string -1                                                           *
*                                                                                      *
***************************************************************************************/


/*
Rewritten Prompt: You are given two numbers. If num2 is greater than num1, return true.
If num1 is greater, return false. If tey are equal, return -1.


Solution: write conditional statements for each of the possible outcomes

*/


function CheckNums(num1,num2){
  
  if(num2 > num1) return true;
  if(num1> num2) return false
  else return -1
  
  
}

console.log(CheckNums(7,6))