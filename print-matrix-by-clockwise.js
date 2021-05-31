/**
 * 矩阵从外到内顺时针打印矩阵
 * 
 */
function printMatrixByClockwise(matrix) {
  let m = matrix.length
  let n = matrix[0].length
  printIJ(matrix, m, n)
}

let list = []

function printIJ(matrix ,ii, jj) {
  if(ii === 0 || jj === 0){
    return
  }
  if(ii === 1){
    for(let i = 0, j = 0; j < jj; j++){
      list.push(matrix[i][j])
    }
  }else if(jj === 1){
    for(let i = 0, j = 0; i < ii; i++){
      list.push(matrix[i][j])
    }
  }else{
    for(let i = 0, j = 0; j < jj; j++){
      list.push(matrix[i][j])
    }
    for(let i = 1, j = jj-1; i < ii; i++){
      list.push(matrix[i][j])
    }
    for(let i = ii-1, j = jj-2; j >= 0; j--){
      list.push(matrix[i][j])
    }
    for(let i = ii-2, j = 0; i >0; i--){
      list.push(matrix[i][j])
    }
    printIJ(matrixSlice(matrix),ii-2,jj-2)
  }
}

/**
 * 将m*n的矩阵切割为(m-1)*)(n-1)的矩阵，边切掉
 * 
 */
function matrixSlice(matrix) {
  return matrix.slice(1,matrix.length - 1).map(list =>{
    return list.slice(1,list.length - 1)
  }) 
}


//printMatrixByClockwise([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])
let l = []
for(let i = 0; i<10; i++){
  l[i] = new Array()
  for(let j =0; j<10; j++){
    l[i][j] = (i)*10 + (j+1)
  }
}
printMatrixByClockwise(l)
console.log(list)