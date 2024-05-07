const convertToCelsius = function (temp) {
	//x °F ≘ (x − 32) × 5/9 °C
	temp = (temp - 32) * (5 / 9);
	temp = Math.round(temp.toFixed(1) * 100) / 100;
	return temp;
};

const convertToFahrenheit = function (temp) {
	// x °C ≘ (x × 9/5+ 32) °F
	temp = temp * (9 / 5) + 32;
	temp = Math.round(temp.toFixed(1) * 100) / 100;
	return temp;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
