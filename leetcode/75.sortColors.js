var sortColors = function (nums) {
    let len = nums.length
    let _map = {
        0: 0,
        1: 0,
        2: 0
    }
    for (let i = 0; i < len; i++) {
        _map[nums[i]] += _map[nums[i]] || 0
    }
    for (let i = 0; i < _map[0]; i++) {
        nums[i] = 0
    }
    for (let i = _map[0]; i < _map[1]; i++) {
        nums[i] = 1
    }
    for (let i = _map[1]; i < _map[2]; i++) {
        nums[i] = 2
    }
    return nums
}