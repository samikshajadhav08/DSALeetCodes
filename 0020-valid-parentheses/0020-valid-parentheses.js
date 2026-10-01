/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map={
        ')':'(',
        '}':'{',
        ']':'['
    };
    for(let ch of s){
        if(ch==='(' || ch==='{' || ch==='['){
            stack.push(ch);
        }else{
            if(stack.length===0) return false;
            let top=stack.pop();
            if(top!==map[ch]) return false;
        }
    }
    return stack.length === 0;
};