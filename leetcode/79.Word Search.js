var exist = function (board, word) {
    let wLen = word.length
    let rowLen = board.length
    let colLen = board[0].length
    let rowIndexs = []
    let colIndexs = []
    var backtrack = function (t) {
        if (t >= wLen) {
            return true
        } else {
            for (let i = 0; i < rowLen; i++) {
                for (let j = 0; j < colLen; j++) {
                    let l = rowIndexs.length
                    if (board[i][j] !== word[l]) {
                        continue
                    }
                    if (l === 0) {
                        rowIndexs.push(i)
                        colIndexs.push(j)
                        backtrack(t + 1)
                        rowIndexs.pop()
                        colIndexs.pop()
                    } else {
                        let lastRowIndex = rowIndexs[l - 1]
                        let lastColIndex = colIndexs[l - 1]
                        if ((i - lastRowIndex === 0 && j - lastColIndex === 1) || (i - lastRowIndex === 1 && j - lastColIndex === 0)) {
                            rowIndexs.push(i)
                            colIndexs.push(j)
                            backtrack(t + 1)
                            rowIndexs.pop()
                            colIndexs.pop()
                        }
                    }
                }
            }
        }
    }

    return !!backtrack(0)
}