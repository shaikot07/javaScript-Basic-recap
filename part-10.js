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