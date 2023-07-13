const reverseString = function(str) {
	let string = str;
	let newString  = '';
	for(let i = string.length-1; i >= 0; i--){
		newString += string[i];
	}
	return newString;
};

string = ['hello', 'hello there', '123! abc!', ''];

for(let j = 0; j <= string.length; j++){
	reverseString('hello');
}

// Do not edit below this line
module.exports = reverseString;
