const reverseString = function(string) {
    const array = string.split('');
    let reversed = "";

    while (array.length > 0) {
        reversed += array.pop();
    }
    
    return reversed;
};

reverseString('hello');
// Do not edit below this line
module.exports = reverseString;
