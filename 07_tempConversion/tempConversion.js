const convertToCelsius = function(f_degrees) {
  return Math.round(((f_degrees - 32) * (5/9)) * 10) / 10;
};

const convertToFahrenheit = function(c_degrees) {
  return Math.round(((c_degrees * (9/5)) + 32)* 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
