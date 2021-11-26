const axios = require('axios')
const { conf } = require('./conf')

const getSunSetSunDownData = async () => {
  console.log("CALL", conf.sunSetSunDownAPIURL)
  const response = await axios.get(conf.sunSetSunDownAPIURL)
    return response.data
}

module.exports = {
  getSunSetSunDownData
}