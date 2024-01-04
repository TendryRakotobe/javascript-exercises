const removeFromArray = function(array, ... elements) {
    for (const element of elements){
        for(let i = 0; i < array.length; i++){
            if(element === array[i]){
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
