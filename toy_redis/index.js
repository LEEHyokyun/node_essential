const redis = require('redis')
const client = redis.createClient()

//client가 redis에 connect event 발생시 log출력
client.on('connect', ()=>{
    console.log('connected')
})

//redis store에 key값에 대한 value값 매핑하여 설정(저장)
client.set('backend', 'node', (err, res) =>{
    console.log(res)
})

//redis store에 key값에 대한 value값을 확보한다
client.get('backend', (err,res) => {
    console.log(res)
})

//redis에 저장된 key value값을 특정 시간 이후에 제거
client.expire('backend', 20)

//data delete
client.del('backend', (err, res) => {
    if(err){
        console.err(err)
    }
    console.log(res)
})

//data update
client.set('key', 1, ()=>{
    client.incr('key', (err, res)=> {
        if(err){
            console.error(err)
        }
        console.log(res)
    })
})

//data update
client.set('value2', 5, ()=>{
    client.decr('value2', (err, res) => {
        if(err) { console.error(err)
        }
        console.log(res)
    })
})