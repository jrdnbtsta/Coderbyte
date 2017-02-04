
/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Powers of Two                                                                       *
*  Using the JavaScript language, have the function PowersofTwo(num) take the num      *
*  parameter being passed which will be an integer and return the string true if       *
*  it's a power of two. If it's not return the string false. For example if the        *
*  input is 16 then your program should return the string true but if the input is     *
*  22 then the output should be the string false                                       *
***************************************************************************************/

// initialize expo, assign 1
// while expo is less than num,
//     multiple expo by two
//     if expo equals num return true
// if we go through while loop and expon never equals num, return false



function PowersofTwo(num){
  var expo = 1
  
  while(expo <= num){
    expo*=2    
    if(expo === num) return true
  }
  
  return false
  
}

console.log(PowersofTwo(16))