const palindromes = function (str) {
    str = str
        .split(' ').join('')
        .split(',').join('').toLowerCase();
    const str2 = str.split('').reverse().join('');
    let str3 = str2.split('').slice();
    const moveElement = str3.splice(0, 1);
    str3.push(moveElement);
    str3 = str3.join('');
    return ((str === str2) || (str === str3));
};
console.log(palindromes('racecar!'));
// Do not edit below this line
module.exports = palindromes;
