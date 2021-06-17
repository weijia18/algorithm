/**
 * 1. 求出负数绝对值的原码
 * 2. 从原码的最后一位数码位往前数，当遇到第一个1时停在此位置
 * 3. 将第一个1前面的数码全部求反
 */
function countOne(n){
    let oneNums = 0,
        quotient = n,
        remainder,
        firstOneIndex = 0//负数绝对值从后数第一个1出现的位置
    if( n >= 0){
        while (quotient !== 0) {
            remainder = quotient % 2
            quotient = Math.floor(quotient/2)
            if(remainder === 1){
                oneNums++
            }

        }
    }else{
        quotient = -n
        while (quotient !== 0) {
            remainder = quotient % 2
            quotient = Math.floor(quotient/2)
            firstOneIndex++
            if(remainder === 1){
                break
            }
        }
        while (quotient !== 0) {
            remainder = quotient % 2
            quotient = Math.floor(quotient/2)
            if(remainder === 1){
                oneNums++
            }
        }
        /**
         * (32 - firstOneIndex) - (oneNums) + 1
         */
        oneNums = (33 - firstOneIndex - oneNums)
    }
    return oneNums
}

console.log(countOne(process.argv[2]))