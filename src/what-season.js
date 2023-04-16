const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  
  if (date.toString() == Date.prototype.toString.call(new Date())) {
    throw new TypeError("Invalid date!");
  }

  if (date instanceof Date == false) {
    throw new TypeError("Invalid date!");
  }

  let season = ["winter", "spring", "summer", "fall"];
  let month = date.getMonth() + 1;

  if (month > 11 || month < 3) return season[0];
  if (month > 2 && month < 6) return season[1];
  if (month > 5 && month < 9) return season[2];
  if (month > 8 || month < 12) return season[3];
}

module.exports = {
  getSeason,
};
