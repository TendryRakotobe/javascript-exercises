const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce( (sum, item) => sum += item, 0);
};

const multiply = function(array) {
  return array.reduce((multiply, value) => multiply * value);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let arr = [];
	if(a === 0) {
    return 1;
  } else {
      for(let i = a; i > 0; i--){
      arr.push(i);
    }
    console.log(arr);
    return arr.reduce((result, value) => result * value);
  }
  
};

console.log(factorial(3));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
