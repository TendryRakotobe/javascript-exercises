const people = [
    {
      name: "Carly",
      yearOfBirth: 2011,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(arr) {
    arr = arr.sort((a, b) => {
        const currentYear = 2024;
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

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
