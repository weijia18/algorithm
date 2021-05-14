/**
 * n级台阶有getJumpWays(n)种跳法（每次跳两级或一级）
 * function getJumpWays(n){return getJumpWays(n-1) + getJumpWays(n-2) + ... + getJumpWays(0)}
 * 
 */
let memorizer = require('./memorizer.js')

let hentaiGetJumpWays = memorizer([1,1], function(shell, n){
    let res = null
    for(let i = n-1; i >= 0; i--){
        res += shell(i)
    }
    return res
})

console.log(hentaiGetJumpWays(process.argv[2]))