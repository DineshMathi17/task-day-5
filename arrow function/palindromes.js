
const Palindromes = (words) =>
words.filter((word) =>
 word.split("").reverse().join("") === word);
 
console.log(Palindromes(["hello", "noon","did","guvi"]));



