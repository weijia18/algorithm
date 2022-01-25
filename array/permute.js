var permute = function (nums) {
    const level1 = function (result, x) {
        let len = result.length
        if (len === 0) {
            result.push(x)
        } else {
            for (let i = 0; i < len; i++) {
                level2(result, result[i], x)
            }
        }
        return result
    }

    const level2 = function (result, arr2, x) {
        let len = arr2.length
        for (let i = 0; i < len; i++) {
            let list = Object.assign(arr2)
            let tmp = arr2[i]
            list[i] = x
            list.push(tmp)
            result.push(list)
        }
    }
    let len = nums.length
    if (len === 1) {
        return [nums]
    } else {
        return level1(permute(nums.slice(0, len - 1)), nums[len - 1])
    }
}