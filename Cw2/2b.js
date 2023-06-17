// 2b.js
function checkNumber(number) {
    if (number > 0) {
      console.log("Liczba jest dodatnia.");
    } else if (number < 0) {
      console.log("Liczba jest ujemna.");
    } else {
      console.log("Liczba jest równa zero.");
    }
  }
  
  checkNumber(10);   // Liczba jest dodatnia.
  checkNumber(-5);   // Liczba jest ujemna.
  checkNumber(0);    // Liczba jest równa zero.
  