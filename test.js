function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    let count = 0
    for(let i = 1; i <= n; i++){
        let arr = String(i).match(/1/g)
        console.log("arr",arr)
        count = count + arr.length
    }
    return count
}

console.log(NumberOf1Between1AndN_Solution(10))