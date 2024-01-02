// What will the following code output?

A = "Hello!";
B = 15;
C = 20;

console.log(A + B + C);

// What will the following code output?

A = "HELLO!";
B = 15;
C = 20;

console.log(C + B + A);

/* Write the JS Code to print all even numbers between start and end.*/
const start = 10;
const end = 20;


for (let i = start; i <= end; i++) {
      if (i % 2 === 0) {
            console.log(i)
      }
}

/* Write the JS Code to print all ODD numbers between start and end.*/
const start2 = 10;
const end2 = 20;


for (let i = start; i <= end; i++) {
      if (i % 2 !== 0) {
            console.log(i)
      }
}

console.log(i);

const numbers = [10, 15, 20, 30];
/* Iterate over this array and find the total sum. */

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
      sum = sum + numbers[i];
}
console.log(sum);

const height = [1.70, 1.65, 1.80, 1.60, 1.75];
const weight = [30, 55, 90, 102, 65];

/* Using these 5 users find the BMI */
/* Update your code below this line */

for (let i = 0; i < height.length; i++) {
      // Calculate BMI
      const bmi = weight[i] / (height[i] ** 2);

      // Display BMI value with two decimal places
      const formattedBMI = bmi.toFixed(2);

      // Determine BMI category
      let category = "";
      if (bmi < 18.5) {
            category = "Underweight";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Normal Weight";
      } else if (bmi >= 25 && bmi <= 29.9) {
            category = "Overweight";
      } else {
            category = "Obese";
      }

      // Display the result
      console.log(`${formattedBMI} ${category}`);
}

// Write a function that takes a string as argument
// Create an object that has a property with key 'key' and a value equal to the string
// Return the object
function myFunction (a) {

      return
}
