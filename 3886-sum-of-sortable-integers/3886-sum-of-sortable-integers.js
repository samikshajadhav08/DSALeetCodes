
/**
 * @param {number[]} nums
 * @return {number}
 */
var sortableIntegers = function(nums) {
    const n = nums.length;

    function check(k) {
        let prevMax = -Infinity;

        for (let start = 0; start < n; start += k) {
            let descents = 0;
            let mini = Infinity;
            let maxi = -Infinity;

            for (let i = start; i < start + k; i++) {
                mini = Math.min(mini, nums[i]);
                maxi = Math.max(maxi, nums[i]);

                // Check the next element, including circular wraparound
                const next = start + (i - start + 1) % k;

                if (nums[i] > nums[next]) {
                    descents++;
                }
            }

            // The block must be sortable by cyclic rotation
            if (descents > 1) return false;

            // Sorted blocks must be in global non-decreasing order
            if (prevMax > mini) return false;

            prevMax = maxi;
        }

        return true;
    }

    let ans = 0;

    for (let k = 1; k * k <= n; k++) {
        if (n % k === 0) {
            if (check(k)) ans += k;

            const other = n / k;

            if (other !== k && check(other)) {
                ans += other;
            }
        }
    }

    return ans;
};
