const convertToCelsius = function (degree) {
  let cels = (degree - 32) * (5 / 9);
  return Math.round(cels * 10) / 10;
};

const convertToFahrenheit = function (degree) {
  let fah = degree * (9 / 5) + 32;
  return Math.round(fah * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
