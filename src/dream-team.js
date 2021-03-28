const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let code = [];
  let arr = [];

  if(Array.isArray(members) == false || members == []) return false

  for(let j = 0; j < members.length; j++){
    if(typeof members[j] === 'string'){
      arr.push(members[j])
    }
  }
 
  for(let k = 0; k < arr.length; k++){
    arr[k] = arr[k].trim();
  }

  for(let i = 0; i < arr.length; i++){
    code.push(arr[i].substr(0, 1).toUpperCase())
  }
  
  return code.sort().join('');
};
