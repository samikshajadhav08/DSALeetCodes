/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
     let plus0 = -Infinity;
    let minus0 = -Infinity;

    let plus1 = -Infinity;
    let minus1 = -Infinity;

    let skipPlus = -Infinity;
    let skipMinus = -Infinity;

    let answer = -Infinity;

    for (const x of nums) {
        // Save previous states
        const p0 = plus0;
        const m0 = minus0;
        const p1 = plus1;
        const m1 = minus1;
        const sp = skipPlus;
        const sm = skipMinus;

        // No deletion: current element is kept
        plus0 = Math.max(x, m0 + x);
        minus0 = p0 - x;

        // Delete the current element
        skipPlus = m0;
        skipMinus = p0;

        // One deletion already used; keep current element
        plus1 = Math.max(m1 + x, sp + x);
        minus1 = Math.max(p1 - x, sm - x);

        answer = Math.max(
            answer,
            plus0,
            minus0,
            plus1,
            minus1
        );
    }

    return answer;
};