/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePaths = function(grid) {
    const MOD = 1_000_000_007;

    const m = grid.length;
    const n = grid[0].length;

    const right = Array.from(
        { length: m },
        () => Array(n).fill(0)
    );

    const down = Array.from(
        { length: m },
        () => Array(n).fill(0)
    );

    right[0][0] = 1;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            if (grid[i][j] === 0) {
                const ways = (right[i][j] + down[i][j]) % MOD;

                if (j + 1 < n) {
                    right[i][j + 1] =
                        (right[i][j + 1] + ways) % MOD;
                }

                if (i + 1 < m) {
                    down[i + 1][j] =
                        (down[i + 1][j] + ways) % MOD;
                }

            } else {
                if (i + 1 < m) {
                    down[i + 1][j] =
                        (down[i + 1][j] + right[i][j]) % MOD;
                }
                if (j + 1 < n) {
                    right[i][j + 1] =
                        (right[i][j + 1] + down[i][j]) % MOD;
                }
            }
        }
    }

    return (right[m - 1][n - 1] +
            down[m - 1][n - 1]) % MOD;
};