//bubblsort
//iterate through each element in given array
//compare first number to second number
  //if first number is bigger, switch the numbers
//compare second number to third number
  //if second number is larger


var array = [2,51,5,1,5,3,1,7,9]


function bubbleSort(array){
  var count = 1
  var temp
  for(i=0; i<array.length; i++){
    for(j=0; j<=array.length-count; j++){
      if(array[j] > array[j+1]){
        temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
      }
    }
    count++
  }
  return array
}


console.log(bubbleSort(array))