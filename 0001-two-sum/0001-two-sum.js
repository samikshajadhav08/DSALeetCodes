/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result={};
    for(let i=0;i<nums.length;i++){
        let num=target-nums[i];
        if(result[num]!==undefined){
            return [result[num],i];
            break;
        }
        result[nums[i]]=i;
    }
};