var subsets = function (nums) {
    let len = nums.length
    let result = []
    let parts = []
    var backtrack = function (t) {
        if (t >= len) {
            result.push(parts)
        } else {
            for (let i = 0; i <= 1; i++) {
                if (i === 1) {
                    parts.push(i)
                    backtrack(t + 1)
                    parts.pop()
                }
            }
        }
    }
    backtrack(0)
    return result
}