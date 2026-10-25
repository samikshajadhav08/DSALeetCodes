/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    function dfs(r, c) {
        // Stop if outside the grid or not land
        if (r < 0 || r >= rows ||c < 0 || c >= cols || grid[r][c] === 1) {
            return;
        }

        // Mark land as visited
        grid[r][c] = 1;

        // Explore all four directions
        dfs(r - 1, c); // Up
        dfs(r + 1, c); // Down
        dfs(r, c - 1); // Left
        dfs(r, c + 1); // Right
    }

    // Step 1: Remove all land connected to the boundary
    for (let r = 0; r < rows; r++) {
        dfs(r, 0);
        dfs(r, cols - 1);
    }

    for (let c = 0; c < cols; c++) {
        dfs(0, c);
        dfs(rows - 1, c);
    }

    // Step 2: Count the remaining islands
    let count = 0;

    for (let r = 1; r < rows - 1; r++) {
        for (let c = 1; c < cols - 1; c++) {
            if (grid[r][c] === 0) {
                count++;
                dfs(r, c);
            }
        }
    }

    return count;
};