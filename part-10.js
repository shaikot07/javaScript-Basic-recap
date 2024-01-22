// Find Second largest element in an array


function findSecondLargest(arr) {
      if (arr.length < 2) {
          return "Array should have at least two elements";
      }
  
      let firstLargest = Math.max(arr[0], arr[1]);
      let secondLargest = Math.min(arr[0], arr[1]);
  
      for (let i = 2; i < arr.length; i++) {
          if (arr[i] > firstLargest) {
              secondLargest = firstLargest;
              firstLargest = arr[i];
          } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
              secondLargest = arr[i];
          }
      }
  
      return secondLargest;
  }
  
  const myArray = [5, 8, 2, 10, 7, 3,25,24];
  const secondLargest = findSecondLargest(myArray);
  console.log("Second largest element:", secondLargest);


//   Move all zeroes to end of array

function moveZeroesToEnd(arr) {
      let nonZeroIndex = 0;
  
      // Iterate through the array and move non-zero elements to the front
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] !== 0) {
              // Swap non-zero element with the element at nonZeroIndex
              [arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]];
              nonZeroIndex++;
          }
      }
  
      return arr;
  }
  

  const testArray = [0, 5, 0, 3, 8, 0, 10];
  const resultArray = moveZeroesToEnd(testArray);
  console.log("Array after moving zeroes to the end:", resultArray);

  
// Rearrange array such that even positioned are greater than odd
// ai problem ar solution ta chat gpt diye kora 

function rearrangeEvenGreater(arr) {
      for (let i = 0; i < arr.length - 1; i += 2) {
          if (i < arr.length - 1 && arr[i] > arr[i + 1]) {
              // Swap elements at odd position (i) and even position (i + 1)
              [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          }
  
          if (i > 0 && arr[i - 1] > arr[i]) {
              // Swap elements at odd position (i) and even position (i - 1)
              [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
          }
      }
  
      return arr;
  }