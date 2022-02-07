const reverseString = (string) => {
    let length = string.length;
    output = '';
    for (let i = length - 1; i >= 0; i--) {
        output = output + string[i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
