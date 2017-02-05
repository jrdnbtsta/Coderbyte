/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Counting Minutes I                                                                  *
*  Using the JavaScript language, have the function CountingMinutesI(str) take the     *
*  str parameter being passed which will be two times (each properly formatted with    *
*  a colon and am or pm) separated by a hyphen and return the total number of minutes  *
*  between the two times. The time will be in a 12 hour clock format. For example:     *
*  if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am     *
*  the output should be 1320.                                                          *
*                                                                                      *
***************************************************************************************/

/*
Rewritten Prompt: You are given two times in the 12-hour clock format. Return the number
of minutes in between each of these times

Solution:
1. create function that converts a given time into minutes from 00:00 (midnight)
2. subtract the result after running each time through new function

MinConvert Function:
1. takes as 12hr format time in the format of: 12:00pm
2. search given string for 'pm'. if found add 12*60 minutes to total min count
3. remove letters, keeping only numbers and colon
4. convert time into an array separated by ':'
5. for the first array element, multiple the number by 60 and add it to total min count
6. for the seocnd array element, add it to total min count
7. return total min count


CountingMinutesI Function:
1. create an array for the given string, separated by '-'
2. call the minConvert function, passing each element of this array
3. return the subtracted return amounts
*/


function minConvert(str){
  
  var totalMins = 0
  
  if(str.search('pm') > 0) totalMins += 60*12
  
  //strip letters, split into array separated by ':'
  var tempArr = str.replace(/[^0-9:]/g,'').split(':')
  
  var hours = Number(tempArr[0])*60
  var mins = Number(tempArr[1])
  
  totalMins += hours
  totalMins += mins
    
  return totalMins
  
}


function CountingMinutesI(str){
  
  //split given string into array separated by '-' to get both times
  var array = str.split('-')
  
  var begTime = minConvert(array[0])
  var endTime = minConvert(array[1])
  
  //correct for if begTime is PM and endTime is AM
  if(begTime >= 720 && endTime <= 720){
    begTime -= 720
    endTime += 720
  }
  
  return endTime - begTime
  
}

console.log(CountingMinutesI('9:00am-10:00am'))