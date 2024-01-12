// Problem 1: Sum of Array Elements with reduce mathode 

function sumArray(arr) {
      return arr.reduce((sum, num) => sum + num, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));

//     Problem 2: Find Maximum Element

function findMax(arr) {
      return Math.max(...arr);
}

const number = [3, 7, 2, 8, 5, 25];
const result = findMax(number)
console.log(result);

//     Problem 3: Remove Duplicates
function removeDuplicate(arr) {
      return [...new Set(arr)];
}
const fruits = ['apple', 'orange', 'banana', 'apple', 'mango', 'pineapple', 'banana'];
console.log(removeDuplicate(fruits));


Problem 4: Reverse Array

function reverseArray(arr) {
      return arr.reverse();
}