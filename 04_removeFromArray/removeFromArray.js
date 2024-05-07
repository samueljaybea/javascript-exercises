const removeFromArray = function () {
	let array = arguments[0];

	for (i = 1; i < arguments.length; ++i) {
		value = arguments[i];

		while (array.includes(value)) {
			array.splice(array.indexOf(value), 1);
		}
	}

	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
