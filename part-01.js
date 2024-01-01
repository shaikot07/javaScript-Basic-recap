function findAddress(obj) {
      if (typeof obj !== 'object') {
            return 'please Provide me a valid Object'
      } else {
            const street = obj.street || '__';
            const house = obj.house || '__';
            const society = obj.society || '__'

            return street + ',' + house + ',' + society;
      }
}




const address = {
      street: 10,
      house: '15A',
      society: 'Earth Perfect'
}


console.log(findAddress(address));

// problem number 02 

function cubeNumber(number) {
      if (typeof number !== "number") {
            return "Invalid input";
      }
      else {
            return number * number * number;
      }

}

console.log(cubeNumber(3));

function canPay(changeArray, totalDue) {
      if (changeArray.length == 0) {
            return 'invalid array'
      }
      let totalChange = 0;
      for (let i = 0; i < changeArray.length; i++) {
            totalChange += changeArray[i];

      }
      if (totalChange >= totalDue) {
            return true
      } else {
            return false
      }
}
const array = [2, 3, 4, 6, 7,];
console.log(canPay(array));

//03 Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
function myFunction(obj) {
      const result = obj.country;
      return result
}

console.log(myFunction({ continent: 'Asia', country: 'Japan' }));

//04 Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function myFunction(a, n) {
      if (n >= 0 && n < a.length) {
           
            return a.charAt(n);
      }
      else {
           
            return "Invalid index";
      }
}
console.log(myFunction('amar valobasda', 4));