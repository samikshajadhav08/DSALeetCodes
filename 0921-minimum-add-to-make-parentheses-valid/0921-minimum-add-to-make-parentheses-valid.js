/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let open=0;
    let add=0;
    for(let ch of s){
        if(ch==="("){
            open++;
        } else{
            if(open>0){
                open--;
            }
            else{
                add++;
            }
        }
    }
    return add+open;
};