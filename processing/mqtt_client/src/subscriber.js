const mqtt = require('mqtt')
const { processPhotoResistorValue } = require('./processing')

const subscriber = {}

subscriber.connect = () => {
  subscriber.client = mqtt.connect("mqtt://localhost:1883")
  subscriber.client.on('connect', () => {

    subscriber.client.subscribe('test_mqtt')
    subscriber.client.subscribe('PHOTORESISTOR_TOPIC')
    
    subscriber.client.on('message', (topic, message) => {

      switch (topic) {
        case 'test_mqtt':
          break
        case 'PHOTORESISTOR_TOPIC':
          processPhotoResistorValue(JSON.parse(message.toString()))
        default:
          break
      }
    })
  })

  subscriber.client.on('error', (error) => {
  })
}

module.exports = subscriber