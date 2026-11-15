/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    let odd=0,sum=0;
    for(const x of arr) odd+=(sum+=x) & 1;
    return odd * (arr.length + 1 - odd) % 1_000_000_007;
};