function findAddress(obj) {
      if(typeof obj !=='object'){
            return 'please Provide me a valid Object'
      }else{
            const street =obj.street ||'__';
            const house = obj.house ||'__';
            const society =obj.society ||'__'

            return street+','+house+','+society;
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
      else{
        return number * number * number;
      }
      
    }

console.log(cubeNumber(3));

function canPay(changeArray, totalDue) {
      if(changeArray.length ==0){
        return 'invalid array'
      }
      let totalChange = 0;
      for(let i =0;i<changeArray.length;i++){
        totalChange += changeArray[i];
         
        }
      if(totalChange >= totalDue){
        return true
      }else{
        return false
      }
    }
const array = [2,3,4,6,7,];
console.log( canPay(array));