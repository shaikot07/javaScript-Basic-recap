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

//     Problem: Check if a Number is Prime

function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
    
   
    console.log(isPrime(7))
    console.log(isPrime(14))
    console.log(isPrime(54))


//     Problem: Capitalize Words
    function capitalizeWords(sentence) {
      return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    
   
    const sentence = 'this is a sample sentence';
    const capitalizedSentence = capitalizeWords(sentence);
    console.log(capitalizedSentence); 


//     Problem: Find the Second Largest Number
function findSecondLargest(arr) {
      const sortedArr = arr.sort((a, b) => b - a);
      return sortedArr[1];
    }
    
  