/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let minopen=0;
    let maxopen=0;
    for(let ch of s){
        if(ch==='('){
            minopen++;
            maxopen++;
        } else if(ch===')'){
            minopen--;
            maxopen--;
        } else{
            minopen--;
            maxopen++;
        }
        if(maxopen<0){
            return false;
        }
        minopen=Math.max(0,minopen);
    }
    return minopen===0;
};