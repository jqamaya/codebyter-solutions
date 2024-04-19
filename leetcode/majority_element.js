/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let numsObj = {};
    let maxFreq = 0;
    let maxElement = 0;

    for (let num of nums) {
        numsObj[num] = numsObj[num] + 1 || 1;
        console.log(numsObj[num])
    }

    for (let num in numsObj) {
        console.log({num})
        if (numsObj[num] > maxFreq) {
            maxFreq = numsObj[num];
            maxElement = parseInt(num);
        }
    }
    return maxElement;
};