const { getSunSetSunDownData } = require('./services')
const { conf } = require('./conf')
const { getTimeLeftToSetOffAlarm } = require('./utils')
const { publisher } = require('./publisher')

// This function is called once a day 2am
const sunSetSunDownLoop = async () => {
  const sunSetSunDownInfo = await getSunSetSunDownData()
  
  const closeBlindsTimeInMillis = getTimeLeftToSetOffAlarm(sunSetSunDownInfo.results.sunrise)
  const openBlindsTimeInMillis = getTimeLeftToSetOffAlarm(sunSetSunDownInfo.results.sunset)

  setTimeout( publisher.send, openBlindsTimeInMillis, "sunSetSunDownInfo", conf.OPEN);  
  setTimeout( publisher.send, 10000 /*closeBlindsTimeInMillis*/, "sunSetSunDownInfo", conf.CLOSE); 
}



module.exports = {
  sunSetSunDownLoop
}