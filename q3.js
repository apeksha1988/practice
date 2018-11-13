/*Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
 If there are two or more words that are the same length, return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty.*/




var word=window.prompt("enter the sentence");
console.log(word);


var finalword=LongestWord(word);
console.log(finalword);

function LongestWord(sen){
	return sen.split(' ').reduce(function(longestword,word){
		console.log(longestword);
		console.log(word);
		return word.length>longestword.length ? word :longestword;
	});
	
}	