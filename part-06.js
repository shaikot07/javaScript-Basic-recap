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


// Problem 4: Reverse Array

function reverseArr(arr) {
      return arr.reverse();
}

const color = ['red', 'green', 'blue'];
console.log(reverseArr(color));

// merge two arrays in one array

function mergeArray(arr1, arr2) {
      return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3, 14, 25];
const arr2 = [4, 5, 6, 3, 2];
console.log(mergeArray(arr1, arr2));

// Find Index of Element
function findIndex(arr, target) {
      const index = arr.indexOf(target);
      return index !== -1 ? index : 'Element not found';
}

const fruit = ['apple', 'orange', 'banana', 'kiwi'];
console.log(findIndex(fruit, 'orange'));

// find common elements

function findCommonElement(arr1, arr2) {
      return arr1.filter(element => arr2.includes(element));
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(findCommonElement(array1, array2))