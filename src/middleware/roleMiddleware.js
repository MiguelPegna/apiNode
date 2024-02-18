const {httpError} = require('../helpers/handleErrors');
const {matchedData} = require('express-validator');
const Role = {};

Role.roleMiddleware = (rol) => async(req, res, next) => {
    try{
        const {user} = req;
        const rolesByUser = user.role;
        const checkRol = roles.some((rolSingle) => rolesByUser.incluides(rolSingle));
        if(!checkRol){
            httpError(res, 'User Not Permissions', 403 );
            return;
        }
        next();
    }catch(e){
        httpError(res, 'Error Permissions', 403 );
    }
}
module.exports = Role;