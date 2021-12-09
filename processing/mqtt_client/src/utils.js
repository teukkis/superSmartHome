
const getTimeLeftToSetOffAlarm = (time) => {
  const alarmTime = new Date(time).getTime()
  const currentTime = new Date().getTime()
  return alarmTime - currentTime
}

const calculateAverage = (valueArray) => {
  const average = valueArray.reduce( ( p, c ) => p + c, 0 ) / valueArray.length;
  return average    
}

module.exports = {
  getTimeLeftToSetOffAlarm,
  calculateAverage
}