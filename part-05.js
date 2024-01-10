//  topice is  js string 

const text = 'hello world';
console.log('The value of text is: ' + text);

// there defrent way to declery  string (single '', dubble " " and backtik ``)
const textOne = 'Hello, ';
const textTwo = "it's ";
const textThree = `me shaikot`;
console.log(textOne, textTwo, textThree);

// connect 2 strings together. In the code below we use the Addition (+) operator to concatenate textOne and textTwo
// const textOne = 'Hello';
// const textTwo = 'World';
// const combined = textOne + ' ' + textTwo;
// console.log(combined);

// Problem: Given a string, write a function to reverse it.

function reverseString(str) {
      return str.split('').reverse().join('');
    }
    
    // test case for this problem
    const reversed = reverseString('Hello');
    console.log(reversed); 


//     Problem 2: Count Vowel in a String
    function countVowel(str) {
      const vowels = 'aeiouAEIOU';
      return str.split('').filter(char => vowels.includes(char)).length;
    }
    
    // Example usage:
    const vowelCount = countVowel('Hello World');
    console.log(vowelCount); 

//     Problem 3: Check Palindrome
    function isPalindrome(str) {
      const reversed = str.split('').reverse().join('');
      return str === reversed;
    }
    
    // Example usage:
    const isPalindromic = isPalindrome('level');
    console.log(isPalindromic);

    function capitalizeWords(sentence) {
      return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
//     Problem 4: Capitalize the First Letter
    // Example usage:
    const capitalizedSentence = capitalizeWords('hello world');
    console.log(capitalizedSentence);