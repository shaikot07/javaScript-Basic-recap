// es6 problem and slution
// Convert a number from one base to another

let base_convert = function(number, initial_base, change_base) {
      if ((initial_base && change_base) <2 || (initial_base && change_base)>36)
       return 'Base between 2 and 36';
      
       return parseInt(number + '', initial_base).toString(change_base);
   }
   
//    console.log(base_convert('E164',19,6));
//    console.log(base_convert(1000,2,8));
//    console.log(base_convert(1546,45,7));

//    JavaScript function to generate a random integer.

let rand = function(min, max) {
      if (min==null && max==null)
        return 0;    
      
      if (max == null) {
          max = min;
          min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
      };
     console.log(rand(20,1));
     console.log(rand(1,10));
     console.log(rand(6));
     console.log(rand());