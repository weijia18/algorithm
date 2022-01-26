var solveNQueens = function (n) {
    let result = []
    let strs = []
    let rowIndexs = []
    let colIndexs = []
    const backtrack = function (t) {
        if (t >= n) {
            //这里不能改变rowIndexs和colIndexs，否则会产生bug
            let matrix = initMatrix(n)
            for (let i = 0; i < n; i++) {
                let rowIndex = rowIndexs[i]
                let colIndex = colIndexs[i]
                let s = matrix[rowIndex]
                s = s.split('')
                s[colIndex] = 'Q'
                s = s.join('')
                matrix[rowIndex] = s
            }
            let _str = matrix.join('')
            if (!strs.includes(_str)) {
                result.push(matrix)
                strs.push(_str)
            }

        } else {
            for (let i = 0; i < n; i++) {
                if (rowIndexs.includes(i)) {
                    continue
                }
                for (let j = 0; j < n; j++) {
                    if (!check(i, j, rowIndexs, colIndexs)) {
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

    //验证当前位置是否在已存在皇后的势力范围内
    const check = function (row, col, rowIndexs, colIndexs) {
        return rowIndexs.some((rowIndex, i) => {
            let colIndex = colIndexs[i]
            if (col === colIndex) {
                return true
            }
            if (colIndex - col === rowIndex - row) {
                return true
            }
            if (colIndex + rowIndex === col + row) {
                return true
            }
            return false
        })
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