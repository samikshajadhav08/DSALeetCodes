/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let count=0;
    for(let x of arr1){
        let ok=true;
        for(let y of arr2){
            ok &= Math.abs(x-y)>d;
        }
        count += ok ? 1:0;
    }
    return count;
};