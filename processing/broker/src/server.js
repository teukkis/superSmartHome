const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
const port = 1883

aedes.on('client', (client) => {
  console.log(client.id, " connected")
})

aedes.on('clientReady', (client) => {
  console.log(client.id, " is ready")
})

aedes.on('clientDisconnect', (client) => {
  console.log(client.id, "disconnected")
})

aedes.on('subscribe', function (subscriptions, client) {
  console.log(`[TOPIC_SUBSCRIBED] Client ${(client ? client.id : client)} subscribed to topics: ${subscriptions.map(s => s.topic).join(',')} on broker ${aedes.id}`)
})

aedes.on('publish', async function (packet, client) {
  if (client) {
      console.log(`[MESSAGE_PUBLISHED] Client ${(client ? client.id : 'BROKER_' + aedes.id)} has published message on ${packet.topic} to broker ${aedes.id}`)
  }
})

server.listen(port, function () {
  console.log('server started and listening on port ', port)
})
