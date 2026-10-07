/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    let leftRemove=0;
    let rightRemove=0;
    for(let ch of s){
        if(ch==='('){
            leftRemove++;
        } else if(ch===')'){
            if(leftRemove>0){
                leftRemove--;
            }else{
            rightRemove++;
            }
        }
    }
    let result=new Set();
    function backtrack(index,path,balance,leftRemove,rightRemove){
        if(balance<0){
            return;
        }
        if(index===s.length){
            if(balance===0 && leftRemove===0 && rightRemove===0){
                result.add(path);
            }
            return;
        }
        let ch=s[index];
        if(ch==='(' && leftRemove >0){
            backtrack(index + 1, path,balance,leftRemove - 1,rightRemove);
        }
         if(ch===')' && rightRemove >0){
            backtrack(index + 1, path,balance,leftRemove,rightRemove-1);
        }
         if (ch !== '(' && ch !== ')') {
            backtrack(index + 1,path + ch,balance,leftRemove,rightRemove);
        } else if (ch === '(') {
            backtrack(index + 1,path + ch,balance + 1,leftRemove,rightRemove);
        } else {
            if (balance > 0) {
                backtrack(index + 1,path + ch, balance - 1,leftRemove,rightRemove);
            }
        }
    }
    backtrack(0,"",0, leftRemove,rightRemove);
    return [...result];
};