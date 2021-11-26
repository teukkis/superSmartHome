
const date = new Date();

const year      = date.getFullYear()
const month     = date.getMonth() + 1
const day       = date.getDate()
const latitude  = 61.513898
const longitude = 23.815865

const conf = {
  sunSetSunDownAPIURL:    `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${year}-${month}-${day}&formatted=0`,
  sunSetSunDownLoopTime:  1000 * 30,// * 60 * 24 //millis * seconds * minutes * hours => DAY
  serviceBrokerAddress:   "mqtt://localhost:1883",
  OPEN:                   'OPEN',
  CLOSE:                  'CLOSE',
  sunSetSunDownLoopFirstRunTime: '2021-11-26T12:29:00'
}

module.exports = {
  conf
}