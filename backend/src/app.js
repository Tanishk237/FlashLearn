// src/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// test route mounted below
const testRoutes = require('./routes/testRoutes');
app.use('/api/test', testRoutes);

module.exports = app;
