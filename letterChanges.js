
/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Letter Changes                                                                      *
*  Using the JavaScript language, have the function LetterChanges(str) take the str    *
*  parameter being passed and modify it using the following algorithm. Replace every   *
*  letter in the string with the letter following it in the alphabet                   *
*  (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string      *
*  (a, e, i, o, u) and finally return this modified string.                            *
*                                                                                      *
***************************************************************************************/


/*
Rewritten Prompt: You are given a string. Replace each letter with the next in the alphabet.
If the next letter is a vowel, capitalize it.

Solution:
1. create a variable, 'alphabet' that has the entire alphabet in a string.
2. using reduce, iterate through each character in the string
  2a. if the current character is in the alphabet, push its next letter into 'all'
3. replace all vowels with its capitalized version

*/


function LetterChase(str){
  
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
  var output = str.split('').reduce(function(all, item, index){
    
    var pusher = item;
    
    if(alphabet.indexOf(item) !== -1) pusher = alphabet[alphabet.indexOf(item)+1]
    
    all += pusher;
    
    return all;
  },'').replace(/[aeiou]/g,function(letter){
    
    return letter.toUpperCase()
  })
  
  return output
}


console.log(LetterChase('hello'))