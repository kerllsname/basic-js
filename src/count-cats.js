const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  let arr = matrix.join(',').split('');
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == '^' && arr[i+1] == '^' && arr[i-1] !== ' ') count++;
  }
  if(count > 0) return count
  else return 0
};
