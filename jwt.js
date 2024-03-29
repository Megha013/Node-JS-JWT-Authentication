const jwt = require('jsonwebtoken'); 

// Secret key for JWT token generation (replace 'YOUR_SECRET_KEY' with your actual secret key)
//const secretKey = '43bec69abb3dc146898d7a190dc22fa8fcd0003da89ab20cabad46b539877578e66237861cbfb72ccd57548ff462fa4ffff59e374bba03d46131ee0bdaeeb40b3d14ba43df0c49625802bf0ebe84bb97176f74966b20b26a4908042f36079ec13c60c173e8c153eca67a41cd57678ba72d259410b80f1bc55d186a56ff36ecacc223992df4dc7eadb0b67acf6eac7fb63f13f2cbd72cb8fabe04b80980034db22b1448bc401d9dd330558476ebe0c2458fa939c81c9bd054ed4e273cc719902478ac75b6713830e5bd3f89290e9011b4748ec712dda4727bb9bed94b86e6aeaa2551e119c4b26a2e559f04a01b89c486dabc6d1422b08f2846cc695818caf031';

const secretKey = process.env.JWT_SECRET;
console.log("secretkey", secretKey);

// Generate JWT token
const generateToken = (user) => {
    const payload = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isActive: user.isActive,
        roles: user.roles
    };

    return jwt.sign(payload, secretKey, { expiresIn: '1h' });

};

console.log(generateToken);
module.exports = {
    generateToken
};
