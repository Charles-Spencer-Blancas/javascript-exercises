const sumAll = (min, max) => {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    if (min < 0 || max < 0) return 'ERROR';
    if (min > max) {
        tmp = max;
        max = min;
        min = tmp;
    }

    let range = max - min;
    let add = max + min;
    if (range % 2 == 0) {
        return add * parseInt(range / 2) + parseInt(add / 2);
    } else {
        return add * parseInt((range + 1) / 2);
    }
};

// Do not edit below this line
module.exports = sumAll;
