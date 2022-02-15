var mySqrt = function (x) {
    let left = 0
    let right = x
    while (left < right) {
        let mid = (left + right) / 2
        if (x > Math(mid, 2)) {
            left = mid + 1
        } else if (x < Math(mid, 2)) {
            right = mid - 1
        } else {
            return mid
        }
    }
    return left
}