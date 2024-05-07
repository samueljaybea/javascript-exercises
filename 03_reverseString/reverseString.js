const reverseString = function (string) {
	const array = string.split(``); // splits the string into an array

	const length = array.length;

	let result = ``;

	for (i = 1; i < length + 1; ++i) {
		result += array.at(i * -1);
	}

	return result;
};

// Do not edit below this line
module.exports = reverseString;
