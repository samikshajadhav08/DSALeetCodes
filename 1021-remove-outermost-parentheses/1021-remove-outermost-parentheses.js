/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let bal=0;
    let result="";
    for(let ch of s){
        if(ch==='('){
            if(bal>0){
                result+=ch;
            }
            bal++;
        }
        else{
            bal--;
            if(bal>0){
                result+=ch;
            }
        }
    }
    return result;
};