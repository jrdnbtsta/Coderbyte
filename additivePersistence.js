/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Additive Persistence                                                                *
*  Using the JavaScript language, have the function AdditivePersistence(num) take the  *
*  num parameter being passed which will always be a positive integer and return its   *
*  additive persistence which is the number of times you must add the digits in num    *
*  until you reach a single digit. For example: if num is 2718 then your program       *
*  should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.         *                                              *
*                                                                                      *

***************************************************************************************/

//function returns the number of times you must add the digits until the sum is a single digit

// 1. inititalize var count, sum to 0
// 2. create while loop, where do if the lenght of the string version of the sum is more than 1
//   2a. add one to count
//   2b. turn sum into string, split into array
//   2c. add each iteration in the array into sum
//   2d. turn sum into string to test while loop
// 3. return count


function AdditivePersistence(num){
  
  //initialize count & sum
  var count = 0
  
  //check if num is already one digit
  if(num<10) return count;
  else count++
  
  var sum = num.toString().split('').reduce(function(all,item,index){
    
    all += Number(item)
    return all;
    
  },0).toString()

  //while loop to see if sum is more than one digit
  while(sum.length > 1){
    count++;
    console.log(sum)
    //add digits together
    sum = sum.split('').reduce(function(all,item,index){    
      all += Number(item)
      return all;
    },0)

    sum.toString()
  }
  return count;
}

console.log(AdditivePersistence(72))