/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(n, edges, labels, k) {
     const adj = Array.from({ length: n }, () => []);

    for (const [u, v, w] of edges) {
        adj[u].push([v, w]);
    }

    // dist[node][count] = minimum cost to reach node
    // with 'count' consecutive occurrences of labels[node].
    const dist = Array.from(
        { length: n },
        () => new Array(k + 1).fill(Infinity)
    );

    // Min-heap: [cost, node, consecutiveCount]
    const heap = [];

    function push(state) {
        heap.push(state);
        let i = heap.length - 1;

        while (i > 0) {
            const p = Math.floor((i - 1) / 2);

            if (heap[p][0] <= heap[i][0]) break;

            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    }

    function pop() {
        if (heap.length === 0) return null;

        const result = heap[0];
        const last = heap.pop();

        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;

            while (true) {
                let smallest = i;
                const left = 2 * i + 1;
                const right = 2 * i + 2;

                if (
                    left < heap.length &&
                    heap[left][0] < heap[smallest][0]
                ) {
                    smallest = left;
                }

                if (
                    right < heap.length &&
                    heap[right][0] < heap[smallest][0]
                ) {
                    smallest = right;
                }

                if (smallest === i) break;

                [heap[i], heap[smallest]] =
                    [heap[smallest], heap[i]];

                i = smallest;
            }
        }

        return result;
    }

    // Starting path contains the label of node 0.
    if (k < 1) return -1;

    dist[0][1] = 0;
    push([0, 0, 1]);

    while (heap.length > 0) {
        const [cost, u, count] = pop();

        // Ignore outdated heap entries.
        if (cost !== dist[u][count]) continue;

        // First valid destination popped has minimum cost.
        if (u === n - 1) return cost;

        for (const [v, weight] of adj[u]) {
            let nextCount;

            if (labels[u] === labels[v]) {
                nextCount = count + 1;
            } else {
                nextCount = 1;
            }

            if (nextCount > k) continue;

            const nextCost = cost + weight;

            if (nextCost < dist[v][nextCount]) {
                dist[v][nextCount] = nextCost;
                push([nextCost, v, nextCount]);
            }
        }
    }
    return -1;
};