const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectToDb = require('./config/db');
const userRoutes = require("./routes/user.routes");
const projectRoutes = require("./routes/project.routes");
const taskRoutes = require("./routes/task.routes");

dotenv.config();
connectToDb();

const app = express();

// CORS configuration to allow only requests from the front-end
const corsOptions = {
  origin: 'http://localhost:5173',  // Replace with your front-end's URL
};

app.use(cors(corsOptions));  // Apply CORS middleware with the options

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

module.exports = app;
