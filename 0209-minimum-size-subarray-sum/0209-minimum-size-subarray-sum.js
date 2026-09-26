/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let windowSum=0;
    let minSum=Infinity;
    let left=0;

    for(let i=0;i<nums.length;i++){
        windowSum +=nums[i];
    
        while(windowSum>=target){
            minSum=Math.min(minSum,i-left+1);
            windowSum -=nums[left];
            left++;
        }
    }
    return minSum===Infinity ? 0 : minSum;
};