/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let mn1 = 2147483647, mn2 = 2147483647;
    for (const x of nums) {
        if (x <= mn1) mn1 = x;
        else if (x <= mn2) mn2 = x;
        else return true;
    }
    return false;
};