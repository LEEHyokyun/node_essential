const express = require('express')
const redis = require('redis')

const subscriber = redis.createClient()

//subscriber가 event를 정의하고, event에 대한 message를 받는 과정
subscriber.on('message', (channel, message) => {
    console.log(`Received : ${message}`)
})

//publisher에서 pub한 event를 받기위해 sub하는 과정
subscriber.subscribe('notify')

const app = express()
let count = 0

//sub routing
app.get('/', (req, res) => {
    res.send(`Subscriber has gotten data ${++count}`)
})

//port binding
app.listen(8500, ()=>{
    console.log('Sub server Running at PORT 8500')
})