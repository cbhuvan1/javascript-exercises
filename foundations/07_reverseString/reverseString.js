const reverseString = function(str) {
    let reversedString = "";

    let strArr = str.split("").reverse();

    for (let item of strArr){
        reversedString = reversedString + item;
    }

    return reversedString;
    

};

// Do not edit below this line
module.exports = reverseString;
