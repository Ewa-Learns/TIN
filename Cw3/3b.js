// 3b.js
function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

console.log(isPalindrome("kajak")); // true
console.log(isPalindrome("hello")); // false
