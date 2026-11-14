/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    let best = Infinity;
    for (let j = l; j <= n; j++) {
        for (let len = l; len <= Math.min(r, j); len++) {
            const sum = prefix[j] - prefix[j - len];
            if (sum > 0 && sum < best) {
                best = sum;
            }
        }
    }
    return best === Infinity ? -1 : best;
};