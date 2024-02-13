const fibonacci = function(number) {
    number = parseInt(number);
    if(number === 0) return 0
    else if(number < 0) return "OOPS";
    let ancien = 1;
    let nouveau = 1;
    for(let i = 2; i < number; i++){
        let temp = nouveau;
        nouveau += ancien;
        ancien = temp;
    }
    return nouveau;
};

// Do not edit below this line
module.exports = fibonacci;
