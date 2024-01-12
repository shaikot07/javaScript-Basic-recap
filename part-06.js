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
    
    const number = [3, 7, 2, 8, 5,25];
    const result =findMax(number)
    console.log(result);