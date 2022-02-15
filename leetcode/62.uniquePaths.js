var uniquePaths = function (m, n) {
    let vers = m - 1
    let steps = m + n - 2
    return factorial(steps, steps - vers + 1) / factorial(vers, 1)
}

var factorial = function (end, begin) {
    let res = 1
    while (end >= begin) {
        res *= end
        end--
    }
    return res
}