/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function(nums1, nums2, k1, k2) {
   let k = k1 + k2;

    let diff = [];
    let maxDiff = 0;
    let totalDiff = 0;

    for (let i = 0; i < nums1.length; i++) {
        let d = Math.abs(nums1[i] - nums2[i]);

        diff.push(d);
        maxDiff = Math.max(maxDiff, d);
        totalDiff += d;
    }
    if (k >= totalDiff) return 0;

    function cost(level) {
        let operations = 0;

        for (let d of diff) {
            if (d > level) {
                operations += d - level;
            }
        }

        return operations;
    }

    let left = 0;
    let right = maxDiff;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (cost(mid) <= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    let level = left;
    let used = cost(level);
    let remaining = k - used;
    let answer = 0;
    for (let d of diff) {
        let reduced = Math.min(d, level);
        answer += reduced * reduced;
    }
    answer -= remaining * (2 * level - 1); 
    return answer;
};