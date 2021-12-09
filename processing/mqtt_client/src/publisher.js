const mqtt = require('mqtt')
const { conf } = require('./conf')
const publisher = {}

publisher.connect = () => {
  publisher.client = mqtt.connect(conf.serviceBrokerAddress)

  publisher.client.on('connect', () => {
    console.log("connected")
  })

  publisher.client.on('error', (error) => {
    console.log(error)
  })
}

publisher.send = send = (topic, doc) => {
  publisher.client.publish(topic, JSON.stringify(doc) , (error) => {
    if(error) console.log(error)
  })
}


module.exports = {
  publisher
}