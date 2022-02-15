var minPathSum = function (grid) {
    let rowLen = grid.length
    let colLen = grid[0].length
    let dp = new Array(rowLen + 1)
    for (let i = 0; i < rowLen + 1; i++) {
        dp[i] = (new Array(colLen)).fill(0)
    }

    for (let i = 1; i < rowLen + 1; i++) {
        for (let j = 1; j < colLen + 1; j++) {
            dp[i][j] = Math.min(dp[i - 1, j], dp[i, j - 1]) + grid[i][j]
        }
    }
    return dp[rowLen][colLen]
}