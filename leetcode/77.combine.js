var combine = function (n, k) {

    let parts = []
    let result = []
    var backtrack = function (t) {
        if (t >= k) {
            result.push(parts)
        } else {
            for (let i = 1; i <= n; i++) {
                if (parts.every(v => i > v)) {
                    parts.push(i)
                    backtrack(t + 1)
                    parts.pop(i)
                }
            }
        }
    }

    backtrack(0)
    return result
}