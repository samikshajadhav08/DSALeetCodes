/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
    let n=arr.length;
    let res=n+1;
    let sum=0,i=0;
    let dp=new Int32Array(n+1).fill(n);
    for(let j=0;j<n;j++){
        sum+=arr[j];
        while(sum>target)
            sum-=arr[i++];
        dp[j+1]=dp[j];
        if(sum===target){
            res=Math.min(res,j-i+1+dp[i]);
            dp[j+1]=Math.min(dp[j],j-i+1);
        }
    }
    return res===n+1 ? -1:res;
};