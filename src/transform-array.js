const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(Array.isArray(arr) === false){
    throw new Error;
  }

  let conditions = ['--discard-next', '--discard-prev', '--double-next', '--double-prev', '']
  let newarr = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '--discard-next') {
      i++;
      newarr.push('');
    } else if (arr[i] === '--discard-prev') newarr.pop();
      else if (arr[i] === '--double-next' && i < arr.length - 1) newarr.push(arr[i + 1]);
      else if (arr[i] === '--double-prev' && i - 1 >= 0) newarr.push(newarr[newarr.length - 1]);
      else newarr.push(arr[i]);
  };

  return newarr.filter(item => !conditions.includes(item));
};
