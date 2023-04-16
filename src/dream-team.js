const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let code = [];
  let arr = [];

  if (Array.isArray(members) == false || members == []) return false;

  for (let j = 0; j < members.length; j++) {
    if (typeof members[j] === "string") {
      arr.push(members[j]);
    }
  }

  for (let k = 0; k < arr.length; k++) {
    arr[k] = arr[k].trim();
  }

  for (let i = 0; i < arr.length; i++) {
    code.push(arr[i].substr(0, 1).toUpperCase());
  }

  return code.sort().join("");
}

module.exports = {
  createDreamTeam
};
