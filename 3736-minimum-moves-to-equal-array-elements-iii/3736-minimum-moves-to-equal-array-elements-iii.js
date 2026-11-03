/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    const top=Math.max(...nums);
    return nums.reduce((moves, x) => moves + top - x, 0);
};