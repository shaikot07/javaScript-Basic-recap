
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