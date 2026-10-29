/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} s
 * @param {string[]} queries
 * @return {boolean[]}
 */
var palindromePath = function(n, edges, s, queries) {
    const adj = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const LOG = Math.ceil(Math.log2(n + 1));
    const parent = new Array(n).fill(0);
    const depth = new Array(n).fill(0);
    const tin = new Array(n).fill(0);
    const tout = new Array(n).fill(0);
    const rootMask = new Array(n).fill(0);

    const up = Array.from(
        { length: LOG },
        () => new Array(n).fill(0)
    );

    const charMask = c => 1 << (c.charCodeAt(0) - 97);

    // Iterative DFS: avoids recursion stack overflow.
    let timer = 0;
    const stack = [[0, -1, 0]];

    while (stack.length) {
        const [u, p, state] = stack.pop();

        if (state === 0) {
            tin[u] = timer++;

            parent[u] = p === -1 ? u : p;
            up[0][u] = parent[u];

            if (p !== -1) {
                depth[u] = depth[p] + 1;
                rootMask[u] = rootMask[p] ^ charMask(s[u]);
            } else {
                rootMask[u] = charMask(s[u]);
            }

            stack.push([u, p, 1]);

            for (let i = adj[u].length - 1; i >= 0; i--) {
                const v = adj[u][i];
                if (v !== p) {
                    stack.push([v, u, 0]);
                }
            }
        } else {
            tout[u] = timer - 1;
        }
    }

    // Binary lifting table.
    for (let k = 1; k < LOG; k++) {
        for (let u = 0; u < n; u++) {
            up[k][u] = up[k - 1][up[k - 1][u]];
        }
    }

    function lca(u, v) {
        if (depth[u] < depth[v]) {
            [u, v] = [v, u];
        }

        let diff = depth[u] - depth[v];

        for (let k = 0; k < LOG; k++) {
            if (diff & (1 << k)) {
                u = up[k][u];
            }
        }

        if (u === v) return u;

        for (let k = LOG - 1; k >= 0; k--) {
            if (up[k][u] !== up[k][v]) {
                u = up[k][u];
                v = up[k][v];
            }
        }

        return parent[u];
    }

    // Fenwick tree supporting XOR point queries and range XOR updates.
    const bit = new Array(n + 1).fill(0);

    function add(i, value) {
        for (i++; i <= n; i += i & -i) {
            bit[i] ^= value;
        }
    }

    function prefix(i) {
        let result = 0;

        for (i++; i > 0; i -= i & -i) {
            result ^= bit[i];
        }

        return result;
    }

    function rangeXor(left, right, value) {
        add(left, value);

        if (right + 1 < n) {
            add(right + 1, value);
        }
    }

    // Current character mask at each node.
    const current = Array.from(s, charMask);
    const answer = [];

    for (const q of queries) {
        const [type, a, b] = q.split(" ");

        const u = Number(a);

        if (type === "update") {
            const newMask = charMask(b);
            const delta = current[u] ^ newMask;

            if (delta !== 0) {
                // Every root path through this subtree changes by delta.
                rangeXor(tin[u], tout[u], delta);

                current[u] = newMask;
            }
        } else {
            const v = Number(b);
            const ancestor = lca(u, v);

            const maskU = rootMask[u] ^ prefix(tin[u]);
            const maskV = rootMask[v] ^ prefix(tin[v]);

            const pathMask =
                maskU ^ maskV ^ current[ancestor];

            // At most one character has an odd frequency.
            answer.push(
                (pathMask & (pathMask - 1)) === 0
            );
        }
    }

    return answer;
};