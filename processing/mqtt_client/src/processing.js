const { getSunSetSunDownData } = require('./services')
const { conf } = require('./conf')
const { getTimeLeftToSetOffAlarm, calculateAverage } = require('./utils')
const { publisher } = require('./publisher')

const photoresistorValuesArray = []

// This function is called once a day 2am
const sunSetSunDownLoop = async () => {
  const sunSetSunDownInfo = await getSunSetSunDownData()
  
  const closeBlindsTimeInMillis = getTimeLeftToSetOffAlarm(sunSetSunDownInfo.results.sunrise)
  const openBlindsTimeInMillis = getTimeLeftToSetOffAlarm(sunSetSunDownInfo.results.sunset)

  setTimeout( publisher.send, openBlindsTimeInMillis, "sunSetSunDownInfo", conf.OPEN);  
  setTimeout( publisher.send, closeBlindsTimeInMillis, "sunSetSunDownInfo", conf.CLOSE); 
}

const processPhotoResistorValue = (value) => {

  // First value out, Last in. queue
  if ( photoresistorValuesArray.length >= conf.maxSizeOfPhotoresistorValueArray) {
    photoresistorValuesArray.shift()
  }

  photoresistorValuesArray.push(value)
  const average = calculateAverage(photoresistorValuesArray);

  if (average > 600) {
    publisher.send("sunSetSunDownInfo", conf.CLOSE)
  }
  else {
    publisher.send("sunSetSunDownInfo", conf.OPEN)
  }
}

module.exports = {
  sunSetSunDownLoop,
  processPhotoResistorValue
}