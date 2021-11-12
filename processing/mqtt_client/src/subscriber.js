const mqtt = require('mqtt')

const subscriber = {}

subscriber.connect = () => {
  subscriber.client = mqtt.connect("mqtt://localhost:1883")
  subscriber.client.on('connect', () => {
    subscriber.client.subscribe('test_mqtt')
    subscriber.client.on('message', (topic, message) => {

      switch (topic) {
        case 'test_mqtt':
          console.log("tilaa testi mqtt")
          break
        default:
          break
      }
      
    })
  })

  subscriber.client.on('error', (error) => {
  })
}

module.exports = subscriber