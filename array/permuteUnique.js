var permuteUnique = function (nums) {
    let len = nums.length
    let Indexs = []
    let result = []
    let strs = []
    const backtrack = function (t) {
        if (t > len) {
            let tmp = []
            let _str = ''
            Indexs.forEach(index => {
                tmp.push(nums[index])
                _str += nums[index]
            })
            if (!strs.includes(_str)) {
                result.push(tmp)
                strs.push(_str)
            }
        } else {
            for (let i = 0; i < len; i++) {
                if (!Indexs.includes(i)) {
                    Indexs.push(i)
                    backtrack(t + 1)
                    Indexs.pop(i)
                }
            }
        }
    }
    backtrack(0)
    return result
}