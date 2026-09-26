/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    const map=new Map(knowledge);
    let res="";
    let i = 0;

    while (i < s.length) {
        if (s[i] === "(") {
            i++;

            let key = "";

            while (s[i] !== ")") {
                key += s[i];
                i++;
            }

            res += map.get(key) ?? "?";
        } else {
            res += s[i];
        }

        i++;
    }
    return res;
};