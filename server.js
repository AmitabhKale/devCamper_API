const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors')

// Route Files
const bootcamps = require('./routes/bootcampRoutes');
const errorHandler = require('./middleware/errorMiddleware') 

// connect DB Route
const connectDB = require('./config/db');

// Load env
dotenv.config()

// Connect to Database
connectDB()

const app = express()

// Body Parser
app.use(express.json())


// Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    // app.use(morgan('dev'))
}

// Mount routers
app.use('/api/v1/bootcamp', bootcamps)

// Error Handler Middleware
app.use(errorHandler);

const PORT = 5000;

app.listen(5000, () => {
    console.log(`Server is Listening on PORT ${PORT} in Development mode`.yellow.bold)
})