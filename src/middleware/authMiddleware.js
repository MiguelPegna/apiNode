const {httpError} = require('../helpers/handleErrors');
const { verifyToken } = require('../helpers/handleJwt');
const getProperties = require('../helpers/handleEngine');
const dbKey = getProperties();
const {usersModel } = require('../models');
const Permit = {};

Permit.authMiddleware = async(req, res, next) => {
    try{
        if(!req.headers.authorization){
            httpError(res, 'Not Token', 401);
            return;
        }

        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);

        if(!dataToken){
            httpError(res, 'Error Not JWT', 401);
            return;
        }

        const query = {
            [dbKey.id]: dataToken[dbKey.id]
        }

        //return user that use endpoint
        const user =await usersModel.findOne({query});
        req.user = user;
        next();

    }catch(e){
        httpError(res, 'Not Session', 401);
    }
};

module.exports = Permit;