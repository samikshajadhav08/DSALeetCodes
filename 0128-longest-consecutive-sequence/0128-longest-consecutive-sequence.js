/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet=new Set(nums);
    let longest=0;
    for(let n of numSet){
        if(!numSet.has(n-1)){
            let len=1;
            while(numSet.has(n+len)){
                len++;
            }
            longest=Math.max(longest,len);
        }
    }
    return longest;
};