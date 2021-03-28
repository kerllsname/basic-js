const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string') return false
  let num = Number(sampleActivity);
  if(isNaN(num)) return false
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = (Math.log(MODERN_ACTIVITY/sampleActivity)/k)
  if(t < 0) return false
  if(!isFinite(t)) return false
  return Math.ceil(t)
};
