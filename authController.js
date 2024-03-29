const express = require('express');
const router = express.Router();
const jwt = require('./jwt');

// Dummy users for demonstration
const users = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', password: 'password', isActive: true, roles: ['User'] },
    { id: 2, firstName: 'Admin', lastName: 'User', email: 'admin@example.com', password: 'adminpassword', isActive: true, roles: ['Admin'] }
];

// Login route
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        const token = jwt.generateToken(user);
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Registration route
router.post('/register', (req, res) => {
    // Add registration logic here
    res.status(501).json({ message: 'Registration endpoint not implemented' });
});

module.exports = router;
