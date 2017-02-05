/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Division Stringified                                                                *
*  Using the JavaScript language, have the function DivisionStringified(num1,num2)     *
*  take both parameters being passed, divide num1 by num2, and return the result as    *
*  a string with properly formatted commas. If an answer is only 3 digits long,        *
*  return the number with no commas (ie. 2 / 3 should output "1"). For example:        *
*  if num1 is 123456789 and num2 is 10000 the output should be "12,345".               *
*                                                                                      *
***************************************************************************************/


/*
Rewritten Prompt: You are given two numbers. Return the rounded quotient of the two as a
properly formatted number (commas separate groups of 3 digits)


Solution: 
1. find the rounded quotient of num1 divided by num2
2. turn quotient into string
3. split quotient into array, one element for each digit
3. iterating through the entire array starting from the end and going to the beginning,
  3a. if the digitCount = 3, unshift a comma into array and reset the digitCount
  in all cases, unshift the current iteration into array and add 1 to digitCount
*/


function DivisionStringified(num1,num2){
  var quot = Math.floor(num1/num2).toString().split('')
  var digitCount = 0
  var output = []
  for(i=quot.length-1; i>=0; i--){
    
    if(digitCount === 3){
      output.unshift(',')
      digitCount = 0
    }
    digitCount++
    output.unshift(quot[i])
    
  }
  
  console.log(output.join(''))
  
}

console.log(DivisionStringified(12345678367678449,10000))