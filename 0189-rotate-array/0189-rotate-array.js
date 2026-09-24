/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const reverse=(left,right)=>{
        while(left<right){
            let temp=nums[left];
            nums[left]=nums[right];
            nums[right]=temp;
            left++;
            right--;
        }
    }
    const n=nums.length;
    k%=n;
    if(k===0) return ;
    const mid=n-k;
    reverse(0,mid-1);
    reverse(mid,n-1);
    reverse(0,n-1);
};