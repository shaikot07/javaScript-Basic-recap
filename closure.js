let tom = 0;

function tomCount() {
    tom += 1;
    return tom; 
}

// console.log(tomCount()); 
// console.log(tomCount()); 
// console.log(tomCount()); 

//  explnation about  hoisting 
var x;
// console.log(x); 

x = 5;
// console.log(x); 


// console.log(myFunction()); 

function myFunction() {
    return "Hello, world!";
}


var myFunc;
// console.log(myFunc); // Output: undefined
// console.log(myFunc()); // TypeError: myFunc is not a function

myFunc = function() {
    return "Hello, world!";
};

// console.log(myFunc()); 


function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

// callback functing 

function sayGoodbye() {
    console.log("Goodbye!");
}

// Example usage
greet("Alice", sayGoodbye);

// console.log(greet);

// test case 

function factorial(n) {
    // Base case
    if (n === 0) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}

// Example usage
// console.log(factorial(5)); 

// test case 03
function fibonacci(n) {
    // Base cases
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage
console.log(fibonacci(5));