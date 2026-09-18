/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {

        let char = s[i];

        // Opening brackets
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        }

        // Closing brackets
        else {
            if (stack.length === 0) {
                return false;
            }

            let top = stack[stack.length - 1];

            if (
                (char === ')' && top !== '(') ||
                (char === ']' && top !== '[') ||
                (char === '}' && top !== '{')
            ) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
};