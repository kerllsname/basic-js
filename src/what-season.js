const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) {
    return "Unable to determine the time of year!";
  }
  if (Object.prototype.hasOwnProperty.call(date, "getMonth")) {
    throw new TypeError;
  }

  let season = ['winter', 'spring', 'summer', 'fall']
  let month = date.getMonth() + 1;
  if(month > 11 || month < 3) return season[0];
  if(month > 2 && month < 6) return season[1];
  if(month > 5 && month < 9) return season[2];
  if(month > 8 || month < 12) return season[3];

};
