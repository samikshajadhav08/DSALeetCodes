/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    const n=s.length;
    let sorted=true;
    for(let i=1;i<n;++i){
        if(s[i]<s[i-1]){
            sorted=false;
            break;
        }
    }
    if(sorted) return 0;
    if(n === 2) return -1;
    let min=s[0],max=s[0];
    for(let i=1;i<n;++i){
        if(s[i]<min) min=s[i];
        if(s[i]>max) max=s[i];
    }
    if(s[0]===min || s[n-1]===max) return 1;
    for(let i=1;i<n-1;++i){
        if(s[i]===min || s[i]===max) return 2;
    }
    return 3;
};