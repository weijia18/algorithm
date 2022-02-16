var exist = function (board, word) {
    let wLen = word.length
    let rowLen = board.length
    let colLen = board[0].length
    let rowIndexs = []
    let colIndexs = []
    var backtrack = function (t) {
        if (t >= wLen) {

        } else {
            for (let i = 0; i < rowLen; i++) {
                for (let j = 0; j < colLen; j++) {
                    if (rowIndexs.length === 0) {
                        rowIndexs.push(i)
                        colIndexs.push(j)
                    }
                }
            }
        }
    }
}