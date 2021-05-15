/**
 * n级台阶有getJumpWays(n)种跳法（每次跳两级或一级）
 * function getJumpWays(n){return getJumpWays(n-1) + getJumpWays(n-2)}
 * 
 * 矩形覆盖问题也是类型的问题
 * 
 */

let memorizer = require('./memorizer.js')

let getJumpWays = memorizer([1,1], function(shell, n){
    return shell(n-1) + shell(n-2)
})

//console.log(getJumpWays(1000))