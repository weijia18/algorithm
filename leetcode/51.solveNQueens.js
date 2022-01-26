var solveNQueens = function (n) {
    let result = []
    let strs = []
    let rowIndexs = []
    let colIndexs = []
    const backtrack = function (t) {
        if (t >= n) {
            let matrix = initMatrix(n)
            while (rowIndexs.length > 0 && colIndexs.length > 0) {
                let rowIndex = rowIndexs.pop()
                let colIndex = colIndexs.pop()
                matrix[rowIndex][colIndex] = 'Q'
            }
            let _str = matrix.join('')
            if (!strs.includes(_str)) {
                result.push(matrix)
                strs.push(_str)
            }
        } else {
            for (let i = 0; i < n; i++) {
                if (rowIndexs.includes(i)) {
                    break
                }
                for (let j = 0; j < n; j++) {
                    if (!colIndexs.includes(j)) {
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

    const initMatrix = function (n) {
        let s = ''
        for (let i = 0; i < n; i++) {
            s += '.'
        }
        return (new Array(n)).fill(s)
    }

    backtrack(0)

    return result
}