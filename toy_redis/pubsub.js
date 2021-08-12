const express = require('express')
const redis = require('redis')

const publisher = redis.createClient()

const app = express()

app.get('/', (req, res) => {
    const data = {  //Routing
        key : 'string_value' 
    }
    //publisher에서 creatClient를 통해 server 접근
    //이벤트정의(notify)
    //이벤트유도 후 data를 stringify하여 전달
    publisher.publish("notify", JSON.stringify(data))

    //response
    res.send("Pub sent event")
})

//port binding
app.listen(8000, ()=> {
    console.log('Running at PORT 8000')
})