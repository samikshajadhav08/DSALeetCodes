/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let min=Infinity;
    let sum=0;
    for(let num of nums){
        sum+=num;
        min=Math.min(min,num);
    }
    return sum-(nums.length * min);
};