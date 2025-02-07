const removeFromArray = function(array, value, ...values) {
    const valueArr = [value].concat(values);

    for (let i = 0; i < valueArr.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] === valueArr[i]) {
                array.splice(j, 1);
                i--;
                console.log(array);
            }
        }        
    }

    return array;

    // console.log(array);
};

// Do not edit below this line
module.exports = removeFromArray;
