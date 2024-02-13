
const findTheOldest = function(arr) {
    arr = arr.sort((a, b) => {
        const currentYear =  new Date().getFullYear();
        if(a.yearOfDeath === undefined){
            a.yearOfDeath = currentYear;
        }
        if(b.yearOfDeath === undefined){
            b.yearOfDeath = currentYear;
        }
        return ((a.yearOfDeath - a.yearOfBirth) > 
        (b.yearOfDeath - b.yearOfBirth)) ? -1 : 1;
        }
    );
    return arr.shift();
};

// Do not edit below this line
module.exports = findTheOldest;
