const express = require('express')
const app =  express()
const connection = require('./config/db')
const bodyParser = require('body-parser')
const cors = require('cors')

connection() 

app.use(bodyParser.json()) 
app.use(cors())

app.use('/api/category', require('./router/category')) 
app.use('/api/news', require('./router/news'))




app.listen(3003, ()=>{
    console.log('3003 port ishga tushdi')
})
