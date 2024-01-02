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


for(let i= start; i <= end; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

/* Write the JS Code to print all ODD numbers between start and end.*/ 
const start2 = 10;
const end2 = 20;


for(let i= start; i <= end; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}