/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  MeanMode                                                                            *
*  Have the function MeanMode(arr) take the array of numbers stored in arr and         *
*  return 1 if the mode equals the mean, 0 if they don't equal each other              *
*  (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).     *
*  The array will not be empty, will only contain positive integers, and will not      *
* contain more than one mode.                                                          *

***************************************************************************************/

// find mode in array
//   sort array
//   iterate through entire loop, starting at 0, going to end
//     assign the current iteration to the variable number
//     add one to count
//     if the iteration equals the number,
//       add one to count
//     if the iteration does not equal the number,
//       if count is greater than modeCount,
//         mode = number
//find mean in array

//if mode equals mean, return 1, else 0


function MeanMode(arr){
  
  var output
  
  if(getMean(arr) === getMode(arr)){
    output = 1
  }else{
    output = 0
  }
  return output
}


function getMean(array){
  var sum =  array.reduce(function(all,item,index){
    all += item

    return all
  },0)
  
  return sum/array.length
}



function getMode(array){
  var mode = {}
  var modeCount = 0
  var count = 0
  var current
  
  for(i=0; i<array.length; i++){
    if(mode[array[i]]){
      mode[array[i]]++
    }else{
      mode[array[i]] = 1
    }
  }
  mode = Object.keys(mode).sort(function(a,b){
    return mode[b]-mode[a]
  })
  
  
  return Number(mode[0])
}

console.log(MeanMode([5,3,3,3,1]))