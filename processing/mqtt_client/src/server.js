const subscriber = require('./subscriber')
const { publisher } = require('./publisher')
const { getTimeLeftToSetOffAlarm } = require('./utils')
const { sunSetSunDownLoop } = require('./processing')
const { conf } = require('./conf')
const app = {}

//connect to mongoDB
//start listening incoming messages
app.init = init = async () => {
    subscriber.connect()
    publisher.connect()

    // Set time and date for the loop to start
    const sunSetSunDownLoopFirstRunInMillis = getTimeLeftToSetOffAlarm(conf.sunSetSunDownLoopFirstRunTime)
    setTimeout( () => setInterval(sunSetSunDownLoop, conf.sunSetSunDownLoopTime), sunSetSunDownLoopFirstRunInMillis )
}

app.init()