const sumAll = function(num1, num2) {
    
   if(num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number" ){
     return "ERROR";
   } else {
        let result = 0;
        let difference = Math.abs(num1 - num2); 
   
        let max = 0;
        if(num1 > num2){
            max = num1;
        } else if(num2 > num1){
            max = num2;
        }
        for(let i = 0; i <= difference; i++){    
            result += max;
            max--;
        }
        return result;
   }
   
};


// Do not edit below this line
module.exports = sumAll;
