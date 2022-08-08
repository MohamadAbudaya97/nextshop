// server.js
const { createServer } = require('http')
const express     = require('express')
const bodyParser  = require('body-parser')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
// when using middleware `hostname` and `port` must be provided below
const nextApp  = next({ dev, hostname, port })
const handle = nextApp.getRequestHandler()

nextApp .prepare().then(() => {
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('*',(req,res)=>{
  return handle(req,res)
})

app.listen(port,err=>{
  if(err) throw err;
  console.log(`> Ready on http://localhost:${port}`)
})

})