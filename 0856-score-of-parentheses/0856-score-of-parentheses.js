/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let stack = [0];
    for( let ch of s ){
        if( ch==='(' ){
            stack.push(0);
        } else {
            let innerScore = stack.pop();
            let score = innerScore === 0 ? 1 : 2 * innerScore;
            stack[stack.length - 1] += score;
        }
    }
    return stack[0];
};