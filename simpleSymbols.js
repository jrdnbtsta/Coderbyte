function SimpleSymbols(str) { 
	var arr = str.split('');
	// create an alphabet array
	var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	// iterate through each char of the string
	for(i=0; i<arr.length; i++){
		if(alpha.indexOf(arr[i]) !== -1){
			if(arr[i -1] === '+' && arr[i+1] === '+'){
				return true;
			}else{
				return false;
			}
		}
	}
	// if the character is in the alphabet array, return true if the character befor and after are '+'

  return str; 
         
}
   
// keep this function call here 
SimpleSymbols(readline());  