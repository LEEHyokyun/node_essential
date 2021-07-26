'use strict'

const dns = require('dns')

//dns 문자주소를 탐색
dns.lookup('google.com')(err, address, family) =>{
  console.log(`address :${address}, ${family}`)
}

dns.resolve4('google.com', (err, addresses) => {
  if(err) throw err
}

const res = JOSN.stringify(addresses)

console.log(res)

addresses.forEach( a => {
  dns.reverse(a, (err, hostnames) => {
    if(err) throw err
    console.log(`reverse for ${a}, ${JSON.stringify(hostnames)}`)
  })
})
  
//reverse for IP address, www.google.com
         