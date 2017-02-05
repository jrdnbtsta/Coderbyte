/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  First Factorial                                                                     *
*  Using the JavaScript language, have the function FirstFactorial(num) take the num   *
*  parameter being passed and return the factorial of it (ie. if num = 4,              *
*  return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.    *                                                     *
*                                                                                      *
***************************************************************************************/

/*
Rewritten Prompt: Return the factorial value of the number given

Solution:
1. create FirstFactorial as a recursive function
2. if num is equal to 1, then return 1
3. in all other cases, return the current number multiplied by the return value of 
  the same funciton for num -1
*/

function FirstFactorial(num){
  if(num ===1) return 1;
  else return num * FirstFactorial(num-1)
}


console.log(FirstFactorial(4))