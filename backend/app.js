const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectToDb = require('./config/db');
dotenv.config();
connectToDb();


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/',(req,res)=>{
    res.send('API is running...')
});


module.exports = app;

