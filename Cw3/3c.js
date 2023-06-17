// 3c.js
function longestWord(str) {
  const words = str.split(" ");
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

console.log(longestWord("Helloooo world")); // Helloooo
console.log(longestWord("Lorem ipsummmmm dolor sit amet")); // ipsummmmm
