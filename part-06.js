// Problem 1: Sum of Array Elements with reduce mathode 

function sumArray(arr) {
      return arr.reduce((sum, num) => sum + num, 0);
    }
    
    const numbers = [1, 2, 3, 4, 5];
    console.log(sumArray(numbers));