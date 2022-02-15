var addBinary = function (a, b) {
    let aLen = a.length
    let bLen = b.length
    let res = []
    let len = Math.min(aLen, bLen)
    let jin = 0
    for (let i = 0; i < len; i++) {
        let he = (+a[i]) + (+b[i]) + jin
        if (he > 1) {
            jin = 1
            let s = he % 2
            res.unshift(s)
        }
    }
    if (aLen > len) {
        while (i < aLen) {
            let he = (+a[i]) + jin
            if (he > 1) {
                jin = 1
                let s = he % 2
                res.unshift(s)
            }
        }
    }
    if (bLen > len) {
        while (i < aLen) {
            let he = (+b[i]) + jin
            if (he > 1) {
                jin = 1
                let s = he % 2
                res.unshift(s)
            }
        }
    }
    if (jin === 1) {
        res.unshift(jin)
    }
    return res.join('')
}