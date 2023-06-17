// 3a.js
const factorialRecursive = function(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorialRecursive(n - 1);
  }
};

function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialRecursive(5)); // 120
console.log(factorialIterative(5)); // 120
