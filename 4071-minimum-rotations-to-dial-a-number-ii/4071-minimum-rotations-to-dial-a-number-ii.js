/**
 * @param {number} n
 * @param {string} s
 * @return {number}
 */
var minRotations = function(n, s) {
    function distance(a, b) {
        const diff = Math.abs(a - b);
        return Math.min(diff, 10 - diff);
    }

    // Cost of dialing the original string
    let total = distance(0, Number(s[0]));

    for (let i = 1; i < n; i++) {
        total += distance(Number(s[i - 1]), Number(s[i]));
    }

    let answer = total;

    // Try reversing each suffix
    for (let k = 0; k < n; k++) {
        let candidate;

        if (k === 0) {
            // Reversed string starts with the last digit
            candidate =
                total
                - distance(0, Number(s[0]))
                + distance(0, Number(s[n - 1]));
        } else {
            // Replace the boundary transition
            candidate =
                total
                - distance(Number(s[k - 1]), Number(s[k]))
                + distance(Number(s[k - 1]), Number(s[n - 1]));
        }

        answer = Math.min(answer, candidate);
    }

    return answer;
};