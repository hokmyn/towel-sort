
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if( arguments.length === 0 || matrix.length === 0) {
    return [];
  }
  let arrRes = [];
  for(let i = 0; i < matrix.length; i++) {
    if(i % 2 === 1) {
      matrix[i].sort((a, b) => {
          return b - a;
      });
    }
    arrRes = arrRes.concat(matrix[i]);
  }
  return arrRes;
}
