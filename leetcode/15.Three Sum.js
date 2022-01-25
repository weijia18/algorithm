/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let result = []
    let len = nums.length
    nums.sort((a,b) => a-b)
    for(let i = 0; i < len - 2; i++){
        let prev = i + 1
        let end = len - 1
        if(i > 0 && nums[i] === nums[i-1]){
            continue
        }
        while(prev < end ){
            if(nums[prev] + nums[end] + nums[i] > 0){
                end--
            }else if(nums[prev] + nums[end] + nums[i] < 0){
                prev++
            }else{
                let tmpL = [nums[i],nums[prev],nums[end]]
                result.push(tmpL)
                //去重
                while(nums[prev] === nums[prev + 1]){
                    prev++
                }
                while(nums[end] === nums[end - 1]){
                    end--
                }
                prev++
                end--
            }
        }
    }
    return result
};



/**
 * js数组方法
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let result = []
    let len = nums.length
    nums.sort((a,b) => a-b)
    for(let i = 0; i < len - 2; i++){
        if(i > 0 && nums[i] === nums[i-1]){
            continue
        }
        for(let j = i + 1; j < len; j++){
            if(j > i + 1 && nums[j] === nums[j-1]){
                continue
            }
            let index = nums.slice(j+1, len).indexOf(-nums[i]-nums[j])
            if(index > -1){
                result.push([nums[i],nums[j],nums[index + j + 1]])
            }
        }
    }
    return result
};