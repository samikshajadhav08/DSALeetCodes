/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        return "";
    }
    let prefix=strs[0];
    for(let i = 0; i < strs.length; i++){
        let j = 0;
        while(j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j] ){
            j++;
        }
        prefix=prefix.slice(0,j);
        if(prefix.length===0){
            return "";
        }
    }
    return prefix;
};