const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY;
const getProperties = require('../helpers/handleEngine');
const dbKey = getProperties();
const jsonWT= {};
//create token
jsonWT.tokenSign = async(userData) => {
    const sign = jwt.sign(
        {
            [dbKey.id]: userData[dbKey.id],
            role: userData.role
        },
        JWT_KEY,
        {
            expiresIn: '2h'
        }
    );
    return sign;
}

//verify token  tokenJWT=token de sesion
jsonWT.verifyToken = async(tokenJWT) => {
    try{
        return jwt.verify(tokenJWT, JWT_KEY);
    }catch(err){
        return null;
    }
}

//delete token for logout
jsonWT.deleteToken = async(tokenJWT) => {
    try{
        return jwt.destroy(tokenJWT);
    }catch(err){
        return null;
    }
}

module.exports = jsonWT;