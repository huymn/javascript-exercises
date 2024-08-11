const removeFromArray = function (arr, ...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    arr = arr.filter((num) => num !== numbers[i]);
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
