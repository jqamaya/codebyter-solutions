/**
 * Roman to integer
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const pairVal = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    const strArr = s.split("");
    let res = 0;
    let i = 0;
    while (i < strArr.length) {
        const num = pairVal[strArr[i]];
        const nextNum = pairVal[strArr[i + 1]] || 0;
        if (num < nextNum) {
            res += nextNum - num;
            i = i + 2;
        } else {
            res += num;
            i++;
        }
    }
    return res;
};