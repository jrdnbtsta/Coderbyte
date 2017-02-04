
/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Dash Insert                                                                         *
*  Using the JavaScript language, have the function DashInsert(str) insert dashes      *
*  ('-') between each two odd numbers in str. For example: if str is 454793 the        *
*  output should be 4547-9-3. Don't count zero as an odd number.                       *
*                                                                                      *

***************************************************************************************/

//separate the string into an array, one element for each digit
//if two odd numbers are next to each other, insert '-' between
//   reduce string into array
//   if the current item is odd
//     add one to count
//     if count is greater than 2 (two odds in a row)
//       push '-' into array
//   if current item is even
//     set count to 0
  
//   at end, push the item into all


function DashInsert(str){
    var count = 0
  
  var array = str.split('').reduce(function(all,item,index){
    if(item % 2 !==0){
      count++
      if(count>1){
        all.push('-')
      }
    }  
    if(item % 2 ===0){
      count = 0
    }
    all.push(item)
    
    return all
    
  },[])
  return array.join('')
}

console.log(DashInsert('454793723509832475'))

