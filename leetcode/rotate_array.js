/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const rotations = k % nums.length;
    if (rotations === 0) return;

    const removed = nums.splice(nums.length - rotations);
    nums.unshift(...removed);
};