/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Swap Case                                                                           *
*  Using the JavaScript language, have the function SwapCase(str) take the str         *
*  parameter and swap the case of each character. For example: if str is "Hello World" *
*  the output should be hELLO wORLD. Let numbers and symbols stay the way they are.    *                                                   *

***************************************************************************************/

//iterate through each letter in str
//if letter is lowercase, return an uppercase version
//if letter is uppercase, return lowercase version


function SwapCase(str){
  
  return str.split('').reduce(function(all,item,index){
    
    if(item === item.toUpperCase()) all.push(item.toLowerCase())
    if(item === item.toLowerCase()) all.push(item.toUpperCase())
    
    return all
    
  },[]).join('')
  
  
}


console.log(SwapCase('Hello World'))