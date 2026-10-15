/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let n=nums.length;
    let res=0;
    for(let i=0;i<n;i++){
        let t=new Set();
        for(let j=i;j<n;j++){
            t.add(nums[j]);
            let m=t.size;
            res+=m*m;
        }
    }
    return res;
};