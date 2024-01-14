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