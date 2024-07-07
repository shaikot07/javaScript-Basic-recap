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