/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // const factorial = factorialize(n);
    // console.log({factorial})
    if (n === 0) return 0;
    return Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5));
};

const factorialize = (num) => {
    if (num < 0) {
        return -1;
    }
    if (num === 0) {
        return 1;
    }
    return (num * factorialize(num - 1));
}