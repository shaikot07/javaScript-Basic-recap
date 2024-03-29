// es6 problem and slution
// 1 Convert a number from one base to another

let base_convert = function (number, initial_base, change_base) {
      if ((initial_base && change_base) < 2 || (initial_base && change_base) > 36)
            return 'Base between 2 and 36';

      return parseInt(number + '', initial_base).toString(change_base);
}

//    console.log(base_convert('E164',19,6));
//    console.log(base_convert(1000,2,8));
//    console.log(base_convert(1546,45,7));

// 2   JavaScript function to generate a random integer number.

let rand = function (min, max) {
      if (min == null && max == null)
            return 0;

      if (max == null) {
            max = min;
            min = 0;
      }
      return min + Math.floor(Math.random() * (max - min + 1));
};
//      console.log(rand(20,1));
//      console.log(rand(1,10));
//      console.log(rand(6));
//      console.log(rand());

//3. function to find the highest value in an array.

function findMax(arr) {
      if (!Array.isArray(arr)) {
            return false; //  check it array ki na
      }

      if (arr.length === 0) {
            return undefined; // array ar length check kore dekhbe 
      }

      let maxNumber = arr[0];
      let maxIndex = 0;

      for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maxNumber) {
                  maxNumber = arr[i];
                  maxIndex = i;
            }
      }

      return maxNumber;

}
const arr = [2, 3, 4, 6, 8, 9, 12, 15, 26];
//  console.log(findMax(arr));

// 4 find the lowest value in an array.

function findMin(arr) {
      if (!Array.isArray(arr)) {
            return false;
      }

      if (arr.length === 0) {
            return undefined;
      }

      return Math.min(...arr);
}
const minArray = [3, 6, 5, 2, 4, -2]
console.log(findMin(minArray));

//     test if a number is a power of 2.
function power_of_2(n) {
      if (typeof n !== 'number')
            return 'Not a number';

      return n && (n & (n - 1)) === 0;
}

// console.log(power_of_2(16));

// calculate the percentage (%) of a number.

function calculatePercentage(num, per)
{
  return (num/100)*per;
}
          
console.log(calculatePercentage(1000, 47.12));

var is_array = function(input) {
      if (toString.call(input) === "[object Array]")
        return true;
      return false;   
        };
    console.log(is_array('resource'));
    console.log(is_array([1, 2, 4, 0]));