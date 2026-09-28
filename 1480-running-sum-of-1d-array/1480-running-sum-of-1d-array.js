/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum=0;
    let result=[];
    for(let num of nums){
        sum+=num;
        result.push(sum);
    }
    return result;
};