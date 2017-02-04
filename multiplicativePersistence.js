/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
  Using the JavaScript language, have the function MultiplicativePersistence(num) take 
  the num parameter being passed which will always be a positive integer and return its 
  multiplicative persistence which is the number of times you must multiply the digits 
  in num until you reach a single digit. For example: if num is 39 then your program 
  should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop 
  at 4. 
***************************************************************************************/
/*
Rewritten Prompt: given a positive integer, multiple the digits together until we have a
product that is one digit. return the number of times that it takes

Solution:
1. initialize variable, 'count' to 0
2. Check that we need to multiple them at all: if num is already one digit, return count
  1a. if it isn't already one digit, add 1 to count
3. initialize variable, 'prod' to the product of the digits of given num
4. while prod is greater than 10:
  4a. add one to count
  4b. turn prod into string
  4c. split prod into array
  4d. reduce prod into the product of the elements in array
5. return count
*/
function MultiplicativePersistence(num){
  var count = 0
  
  //check if we need to do anything
  if(num < 10) return 0;
  else count++;
  
  
  //find product of the digits in num
  var prod = num.toString().split('').reduce(function(all,item,index){
    
    all *= Number(item)
    return all;
  },1)
  
  //create loop to check if we still need to do anything
  while (prod>9){
    count++
    prod = prod.toString().split('').reduce(function(all,item,index){
      all *= Number(item)
      return all;
    },1)
  }
  return count
}

console.log(MultiplicativePersistence(599))