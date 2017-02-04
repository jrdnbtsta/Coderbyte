/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  OffLine Minimum                                                                     *
*  Using the JavaScript language, have the function OffLineMinimum(strArr) take the    *
*  strArr parameter being passed which will be an array of integers ranging from       *
*  1...n and the letter "E" and return the correct subset based on the following       *
*  rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] *
*  where the I's stand for integers and the E means take out the smallest integer      *
*  currently in the whole set. When finished, your program should return that new set  *
*  with integers separated by commas. For example: if strArr is                        *
*  ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5.    *                                                  *

***************************************************************************************/

/*
Rewritten Prompt: You will be given an array of numbers and 'E'. Every time we encounter an E,
save the lowest number within the array. return the entire saved array

Solution:
1. inititalize output array that would hold saved 'lowest value' elements
2. iterate through each element of array
  2a. if current iteration is 'E',
    2aa. sort array
    2ab. push the first element into a the 'all' array
    2ac. shift array
3. return output
  
*/

function OffLineMinimum(strArr){
  var tempArr = [];
  
  var output = strArr.reduce(function(all,item,index){
    
    if(item === 'E'){
      tempArr.sort()
      all.push(tempArr[0])
      tempArr.shift()
      
    }else tempArr.push(item)
    
    return all;
  },[]);
  
  return output;
}


var array = [1,2,3]
array.sort()

console.log(OffLineMinimum(["5","4","6","E","1","7","E","E","3","2","E","1","E","E"]))