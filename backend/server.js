const express = require('express')
const donenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app  = express()

//this middleware is to use the req.body otherwise it will be undefined
app.use(express.json())
app.use(express.urlencoded({extended : false}))
//.........................

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, ()=>console.log(`server started on ${port}`))