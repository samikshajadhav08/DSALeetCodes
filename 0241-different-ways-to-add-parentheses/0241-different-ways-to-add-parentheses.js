/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    let result = [];

    for (let i = 0; i < expression.length; i++) {
        let ch = expression[i];

        if (ch === '+' || ch === '-' || ch === '*') {
            let left = diffWaysToCompute(expression.slice(0, i));
            let right = diffWaysToCompute(expression.slice(i + 1));

            for (let a of left) {
                for (let b of right) {
                    if (ch === '+') result.push(a + b);
                    else if (ch === '-') result.push(a - b);
                    else result.push(a * b);
                }
            }
        }
    }
    if (result.length === 0) {
        result.push(Number(expression));
    }
    return result;
};