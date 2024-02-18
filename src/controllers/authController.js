//se manda a llamar e instancia el modelo de songs
const {usersModel} = require('../models');
const {httpError} = require('../helpers/handleErrors');
const {encrypt, compare} = require('../helpers/handlePassword');
const {tokenSign, deleteToken} = require('../helpers/handleJwt');
const {matchedData} = require('express-validator');
const Auth = {};

/**
 * REgister new user
 */
Auth.register = async(req, res)=>{
    try{
        req = matchedData(req);
        const password = req.password.toString();   //TODO convierte a string '123456'
        const passDB = await encrypt(password);
        const body = {...req, password:passDB};
        const dataUser = await usersModel.create(body);
        //dataUser.set('password', undefined, {strict:false});

        //crear JWT
        const data ={
            token: await tokenSign(dataUser),
            user: dataUser
        }
        res.send({data:data});
    }
    catch(e){
        httpError(res, 'Error Post register' );
    }
};

/**
 * login user
 */
Auth.login = async(req, res)=>{
    try{
        req = matchedData(req);
        //const user = await usersModel.findOne({email: req.email}).select('password name role email');  //moongose
        const user = await usersModel.findOne({email: req.email});  //moongose AND Sequel.Model.
        //if not find user show error
        if(!user){ httpError(res, 'user not exists', 404 ); return; }
        //compare password
        const passDB = user.get('password');
        const checkPass = await compare(req.password, passDB);
        if(!checkPass){ httpError(res, 'Data invalid', 401); return; }
        //set password to undefined for security
        user.set('password', undefined, {strict:false});
        //assign token for session start
        const data = {
            token: await tokenSign(user),
            user: user
        }
        res.send({data});
    }
    catch(e){
        httpError(res, 'Error Post login' );
    }
};

/**
 * logout user
 */
Auth.logout = async(req, res)=>{
    try{
        const token = req.headers.authorization;
        const eraseToken = await deleteToken(token);
        const data = {
            message: 'Logout successfully'
        }
        res.send({data:data});
    }
    catch(e){
        httpError(res, 'Error Post logout' );
    }
    
}

module.exports = Auth;