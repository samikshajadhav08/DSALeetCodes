/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n=nums.length;
    let asc=1,dsc=1;
    for(let i=1;i<n;i++){
        asc+=nums[i]===(nums[i]+1)%n;
        dsc+=nums[i-1]===(nums[i]+1)%n;
    }
    if(asc===n) return nums[0]? Math.min(nums[0],nums[0]+2):0;
    if(dsc===n) return Math.min(n-nums.at(-1),nums.at(-1))+1;

    return -1;
};