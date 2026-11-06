/**
 * @param {number} n
 * @param {number[][]} logs
 * @param {number} x
 * @param {number[]} queries
 * @return {number[]}
 */
var countServers = function(n, logs, x, queries) {
    logs.sort((a, b) => a[1] - b[1]);
    const q = queries.length;
    const order = Array.from({ length: q }, (_, i) => i);
    order.sort((a, b) => queries[a] - queries[b]);

    const cnt = new Array(n + 1).fill(0);
    const res = new Array(q).fill(0);
    let distinct = 0, l = 0, r = 0;
    const m = logs.length;

    for (const id of order) {
        const t = queries[id];
        while (r < m && logs[r][1] <= t) {
            if (cnt[logs[r][0]]++ === 0) distinct++;
            r++;
        }
        while (l < r && logs[l][1] < t - x) {
            if (--cnt[logs[l][0]] === 0) distinct--;
            l++;
        }
        res[id] = n - distinct;
    }
    return res;
};