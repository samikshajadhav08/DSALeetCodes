/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false;
    }else{
        let freq={};
        for(let i=0;i<s.length;i++){
            if(freq[s[i]]){
                freq[s[i]]++;
            }
            else{
                freq[s[i]]=1;
            }
        }
        for(let i=0;i<t.length;i++){
            if(!freq[t[i]]){
                return false;
            }
            freq[t[i]]--;
        }
    }
    return true;
};