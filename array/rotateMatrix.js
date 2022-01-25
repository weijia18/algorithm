var rotate = function (matrix) {
    let len = matrix.length
    let coefficients = []
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            coefficients.push("" + i + j)
        }
    }
    while (coefficients.length > 0) {
        let coefficient = coefficients.pop()
        let row = coefficient.split('')[0]
        let col = coefficient.split('')[1]
        let rowChange = col
        let colChange = len - 1 - row
        let coefficientChange = "" + rowChange + colChange
        let tmp = matrix[row][col]
        matrix[row][col] = matrix[rowChange][colChange]
        matrix[rowChange][colChange] = tmp
        let index = coefficients.indexOf(coefficientChange)
        coefficients.splice(index, 1)
    }
    return matrix
}