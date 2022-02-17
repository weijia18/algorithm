var removeDuplicates = function (nums) {
    let len = nums.length
    let left = 0,
        right = 0,
        mid = 0
    while (right < len) {
        if (nums[right] === nums[left]) {
            right++
            if (mid - left < 2) {
                mid++
            }
            if (mid - left === 1) {
                nums[mid] = nums[right]
            }
        } else {
            nums[mid] = nums[right]
            left = mid
        }
    }
    return mid - left >= 2 ? mid : mid + 1
}