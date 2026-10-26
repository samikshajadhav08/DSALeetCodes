/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countIslands = function(grid, k) {
  const m = grid.length;
    const n = grid[0].length;
    let count = 0;

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) continue;

            let sum = 0;
            const stack = [[r, c]];

            while (stack.length > 0) {
                const [x, y] = stack.pop();

                if (grid[x][y] === 0) continue;

                sum += grid[x][y];

                // Mark this cell as visited
                grid[x][y] = 0;

                for (const [dx, dy] of directions) {
                    const nx = x + dx;
                    const ny = y + dy;

                    if (
                        nx >= 0 && nx < m &&
                        ny >= 0 && ny < n &&
                        grid[nx][ny] > 0
                    ) {
                        stack.push([nx, ny]);
                    }
                }
            }

            if (sum % k === 0) {
                count++;
            }
        }
    }

    return count;
};