
/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Arith Geo                                                                           *
*  Using the JavaScript language, have the function ArithGeo(arr) take the array of    *
*  numbers stored in arr and return the string "Arithmetic" if the sequence follows    *
*  an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If   *
*  the sequence doesn't follow either pattern return -1. An arithmetic sequence is     *
*  one where the difference between each of the numbers is consistent, where as in a   *
*  geometric sequence, each term after the first is multiplied by some constant or     *
*  common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric                        *
*  example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not  *
*  be entered, and no array will contain all the same elements.                        *
*                                                                                      *
***************************************************************************************/

/*
Rewritten Prompt: You are given a sequence of numbers in the form of an array. If the
sequence is an Arithmetic sequence (difference is addition), return "Arithmetic". If
the sequence is Geometric (difference is multiplying), return "Geometric". If neither,
return "-1"

Solution: 

1. create function to check if an array is Arithmetic
2. create function to check if an array is Geometric
3. initialize output and assign "-1" (string)
3. if the array is Arithmetic, output = "Arithmetic"
4. if the array is Geometric, output = "Geometric"
5. return output
*/

function checkArith(arr){
  var diff
  
  //protect against single element array
  if(arr.length <2) return false;
  
  diff = arr[1]-arr[0]
  
  //iterate through entire array to test differences
  for(i=0; i<arr.length-1; i++){
    if(arr[i+1] - arr[i] !== diff) return false;
  }
  
  //if you go through entire array, sequence is arithmetic
  return true;
  
}


function checkGeo(arr){
  var quot
  
  //protect against single element array
  if(arr.length<2) return false;
  
  quot = arr[1] / arr[0]
  
  //iterate through entire array to test quotients
  for(i=0; i<arr.length-1; i++){
    if(arr[i+1] / arr[i] !== quot) return false;
  }
  
  //if you reach end of array, sequence must be geometric
  return true;
  
  
}


function ArithGeo(arr){
  var output
  
  if(checkArith(arr)) output = "Arithmetic"
  else if(checkGeo(arr)) output = "Geometric"
  else output = -1
  
  return output
}

console.log(ArithGeo([2, 4, 6, 8]))