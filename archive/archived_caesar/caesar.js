const caesar = function(msg, key) {
    msg = msg.split('');
    let min = [];
    for(let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++){
        min.push(String.fromCharCode(i));
    }

    let maj = min.join('').toUpperCase().split('');
  
    msg = msg.map((car) => {
        if(key >= 0){
            if(min.indexOf(car) !== -1){
                let index = ((min.indexOf(car) + key) - min.length) % 26;
                if(min.indexOf(car) + key >= min.length){
                    return min[index];
                } else {
                    return min[ min.indexOf(car) + key];
                    
                } 
            } else if(maj.indexOf(car) !== -1){
                let index = ((maj.indexOf(car) + key) - maj.length) % 26;
                if(index >= 0){
                    return maj[index];
                } else {
                    return maj[ maj.indexOf(car) + key];
                }
            } else {
                return car;
            }
        }  else {
            if(min.indexOf(car) !== -1){
                let index = ((min.indexOf(car) + key) + min.length) % 26;
                if(min.indexOf(car) + key >= 0){
                    return min[ min.indexOf(car) + key];
                } else {
                    return min[index];
                }  
            } else if(maj.indexOf(car) !== -1){
                let index = ((maj.indexOf(car) + key) + maj.length) % 26;
                if(index < 26){
                    return maj[index];
                } else {
                    return maj[ maj.indexOf(car) + key];
                }
            } else {
                return car;
            }
        }
    }).join("");
    return msg;
};
cryptage = caesar("Hello", 5);
console.log(cryptage);
decryptage = caesar(cryptage, -5);
console.log(decryptage); 

// Do not edit below this line
module.exports = caesar;
