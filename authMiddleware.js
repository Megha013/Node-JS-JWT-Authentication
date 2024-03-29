    const jwt = require('jsonwebtoken');

    // Middleware to verify JWT token
    const verifyToken = (req, res, next) => {
        // Check if token is provided
        const token = req.headers.authorization;
        console.log(token);
        
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }
    
        // Token format should be 'Bearer <token>'
        const tokenParts = token.split(' ');
        if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
            return res.status(401).json({ message: 'Invalid token format' });
        }
    
        jwt.verify(tokenParts[1], process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log(err);
                return res.status(401).json({ message: 'Failed to authenticate token' });
            }
            req.user = decoded;
            next();
        });
    };

    // Middleware to check user roles
    const checkRole = (role) => {
        return (req, res, next) => {
            // Check if user has required role
            if (!req.user.roles.includes(role)) {
                return res.status(403).json({ message: 'Unauthorized' });
            }
            next();
        };
    };

    module.exports = {
        verifyToken,
        checkRole
    };
