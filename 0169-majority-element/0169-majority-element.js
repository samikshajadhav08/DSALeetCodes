/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq=new Map();
    for(let num of nums){
        freq.set(num,(freq.get(num)||0)+1);
        if(freq.get(num)>nums.length/2){
            return num;
        }
    }
};