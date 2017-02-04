//Two Sum Problem

var array = [3, 5, 2, -4, 8, 11]

function twoSum(array, target){
  var low = 0
  var high = array.length-1
  var output = []
  
  array.sort(function(a,b){
    return a-b
  });
  
  while(low<high){
    if(array[low] + array[high] === target){
      output.push([array[low],array[high]])
      low++
      high--
    }
    if(array[low] + array[high] > target){
      high--;           
    }
    if(array[low] + array[high] < target){
      low = high
    }

  }
  return output
}


console.log(twoSum(array,7))