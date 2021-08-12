'use strict'

const express = require('express')
const fetch = require('node-fetch')
const redis = require('redis')

const app = express()

const client = redis.createClient()

client.on('error', (err) => {
    console.error(`Error: ${err}`)
})

app.get('/cache', (req, res) => {
    const redisKey = 'post : thumbnailUrl';

    return client.get(redisKey, (err, res) => {
        //error
        if(err){
            console.error(err);
        }
        console.log(res)
        //cache 존재
        if(res){
            //해당 cache 바로 return
            //별도 API호출없이 in memory 상태에서 data return 가능
            return res.json({ type: 'cached', data: JSON.parse(res)});
            
        }else { //cahce 존재하지않을때
            //cache in memory로 갖다놓기 위해(fetch) API call 필요.
            fetch('http://jsonplaceholder.typicode.com/photos')
            .then((data) => data.json())
            .then((data) => {
                //set + expire,
                //해당 API에 접근하여 key값을 확보하고 data set
                //이후 expire
                client.set(redisKey, JSON.stringify(data));
                
                return res.json({ type: 'onfly', data: data });
            })
            .catch(err => console.log('err', err))
        }
    })
})

app.listen(3000, ()=> {
    console.log('redis Running at PORT 3000')
})