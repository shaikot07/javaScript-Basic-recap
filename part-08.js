const twoSum = (array, goal) => {
      let indexes = [];
      for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                  if (array[i] + array[j] === goal) {
                        indexes.push(i);
                        indexes.push(j);
                  }
            }
      }
      return indexes;
};

//  syntext and  if else practices 
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
      childsAllowance = 10;
} else {
      childsAllowance = 5;
}



let cheese = "Cheddar";

if (cheese) {
      console.log("Yay! agdum bagdum");
} else {
      console.log("No agdum bugdum");
}

// use || or operator 
if (iceCreamVanOutside || houseStatus === "on fire") {
      console.log("You should leave the house quickly.");
} else {
      console.log("Probably should just stay in then.");
}

//another problem  use ! operator
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
      console.log("Probably should just stay in then.");
} else {
      console.log("You should leave the house quickly.");
}