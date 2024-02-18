//se manda a llamar e instancia el modelo de songs
const {songModel} = require('../models');
const {httpError} = require('../helpers/handleErrors');
const {matchedData} = require('express-validator');
const Songs = {};

/**
 * Obtener items de DB
 */
Songs.index = async(req, res)=>{
    try{
        const user =  req.user;
        const data = await songModel.findAllData({});
        res.send({data, user});
    }catch(e){
        httpError(res, 'Error get index' );
    }
    
};

/**
 * Obtener item de db
 */
Songs.show = async(req, res)=>{
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await songModel.findOneData(id);
        res.send({data});
    }catch(e){
        httpError(res, 'Error get show' );
    }
};
    
/**
 * Crear item
 */
Songs.store = async(req, res)=>{
    try{
        const body = matchedData(req);
        const data = await songModel.create(body);
        res.send({data});
    }
    catch(e){
        httpError(res, 'Error Post Store' );
    }
};

/**
 * Actualizar item
 */
Songs.update = async(req, res)=>{
    try{
        const {id, ...body} = matchedData(req);
        const data = await songModel.findByIdAndUpdate(id, body);
        res.send({data});
    }
    catch(e){
        httpError(res, 'Error Put update' );
    }
};

/**
 * Borrar item
 */
Songs.destroy = async(req, res)=>{
    try{
        req = matchedData(req);
        const {id} = req;
        //const data = await songModel.findByIdAndDelete(id); //borrado del reg en DB
        const data = await songModel.delete({_id:id});
        res.send({data});
    }catch(e){
        httpError(res, 'Error delete destroy' );
    }
};

module.exports = Songs;