/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */
var climbStairs = function(n, costs) {
    costs=[0,...costs];
    let [a,b,c]=[costs[n],Infinity,Infinity];
    for(let i=n-1;i>=0;i--){
        [a,b,c]=[costs[i]+Math.min(a+1,b+4,c+9),a,b];
    }
    return a;
};