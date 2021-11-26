
const getTimeLeftToSetOffAlarm = (time) => {

  const alarmTime = new Date(time).getTime()
  const currentTime = new Date().getTime()

  return alarmTime - currentTime
}

module.exports = {
  getTimeLeftToSetOffAlarm
}