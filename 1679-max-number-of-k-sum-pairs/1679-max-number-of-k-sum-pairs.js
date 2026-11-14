/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b);
    let i = 0, j = nums.length - 1;
    let count = 0;

    while (i < j) {
        const sum = nums[i] + nums[j];
        if (sum === k) {
            count++;
            i++;
            j--;
        } else if (sum > k) {
            j--;
        } else {
            i++;
        }
    }

    return count;
};