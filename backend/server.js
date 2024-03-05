const express = require('express')
const donenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app  = express()

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, ()=>console.log(`server started on ${port}`))