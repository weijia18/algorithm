var plusOne = function (digits) {
    let len = digits.length
    let i = len - 1
    let jin = 1
    while (i >= 0) {
        let he = digits[i] + jin
        if (he > 9) {
            let yu = he % 10
            digits[i] = yu
            jin = 1
        } else {
            jin = 0
            break
        }
    }
    if (jin === 1) {
        digits.unshift(jin)
    }
    return digits
}