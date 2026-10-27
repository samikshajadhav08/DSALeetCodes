/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const res = [];
    let i = 0;
    while (i < words.length) {
        let j = i, len = 0;
        while (j < words.length && len + words[j].length + (j - i) <= maxWidth) {
            len += words[j].length;
            j++;
        }
        const gaps = j - i - 1;
        let line = "";
        if (j === words.length || gaps === 0) {
            line = words.slice(i, j).join(" ");
            line += " ".repeat(maxWidth - line.length);
        } else {
            const spaces = maxWidth - len;
            const even = Math.floor(spaces / gaps);
            let extra = spaces % gaps;
            for (let k = i; k < j; k++) {
                line += words[k];
                if (k < j - 1)
                    line += " ".repeat(even + (extra-- > 0 ? 1 : 0));
            }
        }
        res.push(line);
        i = j;
    }
    return res;
};