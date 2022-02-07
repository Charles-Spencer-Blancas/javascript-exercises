const removeFromArray = (array, ...toRemove) => {
    for (let element of toRemove) {
        let index = array.indexOf(element);
        if (index == -1) continue;
        else {
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
