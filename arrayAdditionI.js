/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Array Addition I                                                                    *
*  Using the JavaScript language, have the function ArrayAdditionI(arr) take the array *
*  of numbers stored in arr and return the string true if any combination of numbers   *
*  in the array can be added up to equal the largest number in the array, otherwise    *
*  return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the      *
*  output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, *
*  will not contain all the same elements, and may contain negative numbers.           *                                         *

***************************************************************************************/

/*
Rewritten Prompt: You are given an array. Return true if any combination of the numbers
can sum up to the largest number

Solution:
1. find largest number and remove it from array
2. Create two nested for loops
  2a. Outer loop iterates through entire array
    2aa. first inner loop iterates through array except the current, adding all to total
    if at any time total equals the largest sum, return true
    2ab. second inner loop iterates through array except the ccurrent, subtracting each from total
    if at any time the total equals the largest sum, return true
3. if you run through entire loop, there is no combination of sums possible
    

*/


function ArrayAdditionI(arr){
  var sum = 0
  
  //save and remove largest number in array
  var target = arr.sort(function(a,b){
    return a-b;
  }).pop()
  
  for(i=0; i<arr.length; i++){
    sum += arr[i]
    //first nested loop - sum each array element one by one, if the sum === target, return true
    for(j=0; j<arr.length; j++){
      
      //do not add i twice
      if(j !== i){
        sum += arr[j];
        console.log(sum)
        if(sum === target) return true;
      }
    }
    //second nested loop - subtract one element at a time, return if sum === target
    for(k=0; k<arr.length; k++){
      if(k!==i){
        sum-= arr[k];
        if(sum === target) return true;
      }
    }
    sum = 0;  
  }
  
  return false;
  
}

console.log(ArrayAdditionI([4,6,23,10,1,3]))