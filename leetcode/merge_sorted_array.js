/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let sorted = nums2;
    if (n === 0) {
        return;
    }
    if (m !== 0 && n!== 0) {
        sorted = nums1
            .slice(0, m)
            .concat(nums2)
            .sort((a, b) => a - b);
    }
    sorted.forEach((num, index) => nums1[index] = num);
};