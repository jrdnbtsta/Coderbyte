
/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Number Addition                                                                     *
*  Using the JavaScript language, have the function NumberSearch(str) take the str     *
*  parameter, search for all the numbers in the string, add them together, then        *
*  return that final number. For example: if str is "88Hello 3World!" the output       *
*  should be 91. You will have to differentiate between single digit numbers and       *
*  multiple digit numbers like in the example above. So "55Hello" and "5Hello 5"       *
*  should return two different answers. Each string will contain at least one letter   *
*  or symbol.                                                                          *
*                                                                                      *
***************************************************************************************/

//replace all numbers in string with blank spaces
//going through each array element after splitting the string,
  //if two number digits are together, concat them
  //push them into sub array to create an array of numbers
//find sum of elements in array

function NumberSearch(str){
  
  var tempNum = []
  var array = str.replace(/[^0-9]/g,' ').split('').reduce(function(all,item,index){
    if(item !== ' ') tempNum.push(item);
    if(item === ' '){
      if(tempNum.length !== 0){
        all.push(tempNum.join(''))
      }
      tempNum = []
    }
    
    return all
    
  },[])
  
  return array.reduce(function(all,item,index){
    var num = Number(item)
    all += num
    
    return all
    
  },0)
  
}

console.log(NumberSearch('88Hello 3World!'))