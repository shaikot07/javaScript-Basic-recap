
let cheese = "Cheddar";

if (cheese) {
      console.log("Yay! agdum bagdum");
} else {
      console.log("No agdum bugdum");
}

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


  var is_array = function(input) {
      if (toString.call(input) === "[object Array]")
        return true;
      return false;   
        };
    console.log(is_array('resource'));
    console.log(is_array([1, 2, 4, 0]));


// find common elements

function findCommonElement(arr1, arr2) {
      return arr1.filter(element => arr2.includes(element));
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(findCommonElement(array1, array2))

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
  