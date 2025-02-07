const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";

    let x = 0, y = 0;

    if (num2 < num1) {
        x = num2;
        y = num1;
    } else {
        x = num1;
        y = num2;
    }

    let result = 0;
    for (let i = x; i <= y; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
