const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');


dotenv.config({path: './config/config.env'});

connectDB();

const transaction = require('./routes/transaction');
const app = express();


app.use(express.json());


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

// app.get('/', (req,res)=> res.send('Hello'));
// API Route
app.use('/api/v1/transactions', transaction);


// Production on Heroku
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
}


const PORT = process.env.PORT || 5000;
app.listen(PORT), console.log(`Server running in ${process.env.NODE_ENV} mode and in port ${PORT}`.blue.bold);  
