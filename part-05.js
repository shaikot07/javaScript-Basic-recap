//  topice is  js string 

const text = 'hello world';
console.log('The value of text is: ' + text);

// there defrent way to declery  string (single '', dubble " " and backtik ``)
const textOne = 'Hello, ';
const textTwo = "it's ";
const textThree = `me shaikot`;
console.log(textOne, textTwo, textThree);

// connect 2 strings together. In the code below we use the Addition (+) operator to concatenate textOne and textTwo
const textOne = 'Hello';
const textTwo = 'World';
const combined = textOne + ' ' + textTwo;
console.log(combined);

// Problem: Given a string, write a function to reverse it.

function reverseString(str) {
      return str.split('').reverse().join('');
    }
    
    // test case for this problem
    const reversed = reverseString('Hello');
    console.log(reversed); 