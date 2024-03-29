require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const todoController = require('./todoController');
const authController = require('./authController');
const authMiddleware = require('./authMiddleware');
const cors = require('cors'); // Import cors module

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.use('/todo', authMiddleware.verifyToken); // Protect TodoController routes
app.use('/todo', todoController);
app.use('/auth', authController);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
