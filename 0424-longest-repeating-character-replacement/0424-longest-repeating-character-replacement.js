/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left=0;
    let maxLen=0;
    let maxFreq=0;
    let freq=new Map();

    for(let i=0;i<s.length;i++){
        freq.set(s[i],(freq.get(s[i])|| 0)+1); 
        
        maxFreq=Math.max(maxFreq,freq.get(s[i]));

        while((i-left+1)-maxFreq >k){
            freq.set(s[left],freq.get(s[left])-1);
            maxFreq=Math.max(...freq.values());
            left++;
        }
        maxLen=Math.max(maxLen,i-left+1);
    }
    return maxLen;
};