const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectToDb = require('./config/db');
const userRoutes = require("./routes/user.routes");
const projectRoutes = require("./routes/project.routes");
const taskRoutes = require("./routes/task.routes") ;
dotenv.config();
connectToDb();


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/users',userRoutes);
app.use('/api/projects',projectRoutes);
app.use('/api/tasks',taskRoutes) ;


module.exports = app;

