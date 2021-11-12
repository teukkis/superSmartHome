const mqtt = require('mqtt')
const publisher = {}

publisher.connect = () => {
  publisher.client = mqtt.connect("mqtt://localhost:1883")

  publisher.client.on('connect', () => {
    console.log("connected")
  })

  publisher.client.on('error', (error) => {
    console.log(error)
  })
}

publisher.send = send = (doc) => {
  publisher.client.publish('test', "test" , (error) => {
    console.log(error)
  })
}

module.exports = publisher