require('dotenv').config()
const express = require ('express')
const cors = require('cors')
require('./DB/connection')
const router=require('./Routes/router')

const dropCartServer = express()

dropCartServer.use(cors())
dropCartServer.use(express.json())
dropCartServer.use(router)

const PORT = 3000 || process.env.PORT

dropCartServer.listen(PORT,()=>{
    console.log("dropcart server connected successfully");
})

dropCartServer.get('/',(req,res)=>{
    res.status(200).send(`<h1>dropcart server connectedsuccessfully and waiting for request</h1>`)
})