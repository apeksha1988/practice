/* Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
 For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
 Please don’t use any inbuilt function.*/



var str=window.prompt("enter the string");
console.log(str);
var str1=FirstReverse(str)
console.log(str1);

function FirstReverse(str){
	var o='';
	for(var i=str.length-1;i>=0;i--){
		
		o+=str[i];
		
	}
	return o;
	
	
}