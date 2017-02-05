/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Dash Insert                                                                         *
*  Using the JavaScript language, have the function DashInsert(str) insert dashes      *
*  ('-') between each two odd numbers in str. For example: if str is 454793 the        *
*  output should be 4547-9-3. Don't count zero as an odd number.                       *
*                                                                                      *
***************************************************************************************/

/*
Rewritten Prompt: You are given a string of numbers. If there are two consecutive odd
numbers, insert a '-' in between them.

Solution:
1. initialize 'prevNum', and set it to the first index of the string
2. iterating through each index starting at the second, 
  2a. if prevNum and current item are both odd,
    2aa. insert a '-'
  2b. insert the item
3. return new string
*/


function DashInsert(str){
  
  var prevNum = str[0]
  
  var output = str.split('').reduce(function(all,item,index){
    
    if(index > 0){
      if(item % 2 !== 0){
        if(prevNum % 2 !== 0){
          all += '-'
        }
      }
    }
    prevNum = item
    all += item
    return all
    
  },'')
  
  return output
}

console.log(DashInsert('454793'))