// 3d.js
function findSecondMinMax(numbers) {
  const sorted = numbers.sort((a, b) => a - b);
  return {
    secondMin: sorted[1],
    secondMax: sorted[sorted.length - 2]
  };
}

const numbers = [5, 2, 8, 3, 1, 9, 4, 6, 7];
console.log(findSecondMinMax(numbers)); // { secondMin: 2, secondMax: 8 }
