const fibonacci = function (num) {
  num = Number.parseInt(num);
  if (num < 0) return "OOPS";

  if (num === 0) return 0;

  if (num === 1 || num === 2) return 1;

  let prevPrevValue = 1;
  let prevValue = 1;

  let fibValue = prevPrevValue + prevValue;

  let counter = 3;

  while (counter < num) {
    prevPrevValue = prevValue;
    prevValue = fibValue;
    fibValue = prevPrevValue + prevValue;

    counter++;
  }

  return fibValue;
};

// Do not edit below this line
module.exports = fibonacci;
