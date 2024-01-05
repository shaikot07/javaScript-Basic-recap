// Write a function that takes a string as input and returns the string reversed.

function reverseString(str) {
      return str.split('').reverse().join('');
}

const originalString = 'Hello, World!';
const reversedString = reverseString(originalString);
console.log(reversedString);