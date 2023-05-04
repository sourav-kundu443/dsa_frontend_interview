const isPalindrome = function (value) {
  return value.toString() === value.toString().split("").reverse().join("");
};

console.log(isPalindrome("MADAAM"));
