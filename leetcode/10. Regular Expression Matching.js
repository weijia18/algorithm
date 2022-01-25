/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    s = '#' + s
    p = '#' + p 
    let sLen = s.length
    let pLen = p.length
    let towDList = []
    for(let i = 0; i < sLen; i++){
        towDList[i] = new Array()
        for(let j = 0; j < pLen; j++){
            if(p[j] === '.' || s[i] === p[j]){
                if(i === 0 || j=== 0){
                    if(i=== 0 && j ===0){
                        towDList[i][j] = true
                    }else{
                        towDList[i][j] = false
                    }
                }else{
                    towDList[i][j] = towDList[i-1][j-1]
                }
            }else if(p[j] === '*'){
                if(towDList[i][j - 1] === true){
                    towDList[i][j] = true
                }else if(towDList[i][j - 2] === true){
                    towDList[i][j] = true
                }else if(s[i] === p[j - 1] || p[j - 1] === '.'){
                    if( i- 1 >= 0){
                        towDList[i][j] = towDList[i - 1][j]
                    }else{
                        towDList[i][j] = false
                    }
                }else{
                    towDList[i][j] = false
                }
            }else{
                towDList[i][j] = false
            }
        }
    }
    console.log(towDList)
    return towDList[sLen - 1][pLen - 1]

};


/**
 * 博客解法
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
//  var isMatch = function(s, p) {
//     s = '#' + s
//     p = '#' + p 
//     let sLen = s.length
//     let pLen = p.length;
//     let towDList = Array(sLen);
//     for (let i = 0; i < sLen; i++) {
//         towDList[i] = Array(pLen).fill(false)
//     }
//     towDList[0][0] = true;
//     for (let i = 1; i < pLen; i++) {
//         if (p[i] === "*") {
//             towDList[0][i] = towDList[0][i - 1] || towDList[0][i - 2]
//         }
//     }
//     for(let i = 1; i < sLen; i++){
//         for(let j = 1; j < pLen; j++){
//             if(p[j] === '.' || s[i] === p[j]){
//                 towDList[i][j] = towDList[i-1][j-1]
//             }else if(p[j] === '*'){
//                 if(towDList[i][j - 1] === true){
//                     towDList[i][j] = true
//                 }else if(towDList[i][j - 2] === true){
//                     towDList[i][j] = true
//                 }else if(s[i] === p[j - 1] || p[j - 1] === '.'){
//                     towDList[i][j] = towDList[i - 1][j]
//                 }else{
//                     towDList[i][j] = false
//                 }
//             }else{
//                 towDList[i][j] = false
//             }
//         }
//     }
//     console.log(towDList)
//     return towDList[sLen - 1][pLen - 1]

// };

/**
 * 回溯法
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function (s, p) {
//     if (p === '') return s === ''
//     let first_match = (!(s === '') && (p.charAt(0) == s.charAt(0) || p.charAt(0) == '.'));
//     if (p.length >= 2 && p.charAt(1) == '*') {
//         return (isMatch(s, p.substring(2)) || (first_match && isMatch(s.substring(1), p)));
//     } else {
//         return first_match && isMatch(s.substring(1), p.substring(1));
//     }
// };