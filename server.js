const express = require('express');
const dotenv = require('dotenv');

// Route Files
const bootcamps = require('./routes/bootcampRoutes')

// Load env
dotenv.config()

const app = express()

app.get('/' , (req,res) => {
    res.send("Hello World API...")
})

// Mount routers
app.use('/api/v1/bootcamp', bootcamps)

const PORT = 5000;

app.listen(5000, () => {
    console.log(`Server is Listening on PORT ${PORT} in Development mode`)
})