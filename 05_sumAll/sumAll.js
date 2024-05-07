const sumAll = function (num1, num2) {
	let array = [];
	let smallNum;
	let bigNum;
	let sum = 0;

	if (num1 > 0 && num2 > 0 && Number.isInteger(num1) === true && Number.isInteger(num2) === true) {
		if (num1 > num2) {
			smallNum = num2;
			bigNum = num1;
		}
		if (num1 < num2) {
			smallNum = num1;
			bigNum = num2;
		}
	} else {
		return 'ERROR';
	}

	while (smallNum <= bigNum) {
		array.push(smallNum++);
	}

	for (let i = 0; i < array.length; ++i) {
		sum += array[i];
	}

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
