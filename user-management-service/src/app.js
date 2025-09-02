require("dotenv").config();
const express = require('express');
const createServer = require('./config/server');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const logger = require('./utils/logger');


const app = createServer();
connectDB();
app.use('/api/users', userRoutes);

app.listen(process.env.PORT || 5000, () => {
  logger.info(`Server running on port ${process.env.PORT || 5000}`);
});