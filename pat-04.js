// Write a function that takes a string as input and returns the string reversed.

function reverseString(str) {
      return str.split('').reverse().join('');
}

const originalString = 'Hello, World!';
const reversedString = reverseString(originalString);
console.log(reversedString);

// 2. Problem: Find the Largest Number in an Array

function findLargestNumber(arr) {
      return Math.max(...arr);
    }
    
    const numbers = [2, 8, 1, 5, 9];
    const largestNumber = findLargestNumber(numbers);
    console.log(largestNumber);

//     Problem: Calculate Factorial

function calculateFactorial(num) {
      if (num === 0 || num === 1) {
        return 1;
      } else {
        return num * calculateFactorial(num - 1);
      }
    }
    
    const factorialOf5 = calculateFactorial(5);
    console.log(factorialOf5); 