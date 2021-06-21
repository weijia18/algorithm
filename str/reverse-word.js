/**
 * 翻转单词
 * @param {} str 
 */
function reverseWord(str){
  let strList = str.split(' ')
  return strList.reverse().join(' ')
}

console.log(reverseWord("i am a programmer"))