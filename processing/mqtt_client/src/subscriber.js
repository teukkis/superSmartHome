const mqtt = require('mqtt')

const subscriber = {}

subscriber.connect = () => {
  subscriber.client = mqtt.connect("mqtt://localhost:1883")
  subscriber.client.on('connect', () => {

    subscriber.client.subscribe('test_mqtt')
    subscriber.client.subscribe('sunSetSunDownInfo')
    
    subscriber.client.on('message', (topic, message) => {

      switch (topic) {
        case 'test_mqtt':
          console.log("tilaa testi mqtt")
          break
        case 'sunSetSunDownInfo':
          console.log('sunSetSunDownInfo tilaajassa')
        default:
          break
      }
      
    })
  })

  subscriber.client.on('error', (error) => {
  })
}

module.exports = subscriber