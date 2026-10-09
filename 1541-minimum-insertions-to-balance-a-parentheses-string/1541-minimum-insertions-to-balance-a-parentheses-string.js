/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let open=0;
    let ins=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            open++;
        } else{
            if(i+1 < s.length && s[i+1]===')'){
                i++;
            } else{
                ins++;
            }
            if(open>0){
                open--;
            }else{
                ins++;
            }
        }
    }
    return ins + open * 2;
};