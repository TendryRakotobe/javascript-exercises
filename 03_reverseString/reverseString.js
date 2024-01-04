const reverseString = function(word) {
    let result = "";
    string = word.split("");
    for(let i = string.length - 1; i >= 0; i--){
        result += string[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
