const palindromes = function (str) {
  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    if (!str.charAt(left).match(/[a-zA-Z0-9]/)) {
      left++;
    } else if (!str.charAt(right).match(/[a-zA-Z0-9]/)) {
      right--;
    } else if (
      str.charAt(left).toLowerCase() !== str.charAt(right).toLowerCase()
    ) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
