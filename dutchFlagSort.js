//Dutch Flag Sorting Problem


var array = [2,0,0,1,2,1]

function swap(array,a,b){
  var temp = array[a]
  array[a] = array[b]
  array[b] = temp
  return array
}

function dutchFlag(array){
  var low = 0
  var mid = 0
  var high = array.length-1
  
  
  while (high > mid){
    if(array[mid] === 2){
      swap(array,mid,high)
      mid++
      high--
    }
    if(array[mid] === 0){
      swap(array,mid,low)
        mid++
        low++
      }
      if(array[mid] === 1){
        mid++
      }
    }
  return array
}