/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefix=[0];
    for(let num of nums){
        this.prefix.push(this.prefix[this.prefix.length-1]+num);
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
   return this.prefix[right+1]-this.prefix[left]; 
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */