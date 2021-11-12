const subscriber = require('./subscriber')
const publisher = require('./publisher')

const app = {}

//connect to mongoDB
//start listening incoming messages
app.init = init = () => {
    subscriber.connect()
    publisher.connect()
}

app.init()