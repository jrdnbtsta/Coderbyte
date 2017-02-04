// Take the array of strings
// sort by word length in decending order
// return the third largest word

function ThirdGreatest(strArr){
  
  strArr.sort(function(a,b){
    return b.length - a.length
  })
  
  return strArr[2]
  
}


console.log(ThirdGreatest(["hello", "world", "after", "all"]))