const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr) === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let conditions = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
    "",
  ];
  let newarr = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === "--discard-next") {
      i++;
      newarr.push("");
    } else if (arr[i] === "--discard-prev") newarr.pop();
    else if (arr[i] === "--double-next" && i < arr.length - 1)
      newarr.push(arr[i + 1]);
    else if (arr[i] === "--double-prev" && i - 1 >= 0)
      newarr.push(newarr[newarr.length - 1]);
    else newarr.push(arr[i]);
  }

  return newarr.filter((item) => !conditions.includes(item));
}

module.exports = {
  transform,
};
