//se manda a llamar e instancia el modelo de songs
const fs = require('fs');
const {storageModel} = require('../models');
const {httpError} = require('../helpers/handleErrors');
const {matchedData} = require('express-validator');
const Songs = {};
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_URL = `${__dirname}/../storage`;

/**
 * Obtener items de DB
 */
Songs.index = async(req, res)=>{
    try{
        const data = await storageModel.find({});
        res.send({data});
    }
    catch(e){
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
        const data = await storageModel.findById(id);
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
        const {body, file} = req;
        const fileData = {
            filename: file.filename,
            //url: `${file.filename}`
            url: `${PUBLIC_URL}/${file.filename}`
        };
        const data = await storageModel.create(fileData);
        res.send({data});
    }catch(e){
        httpError(res, 'Error Post Store' );
    }
};

/**
 * Actualizar item
 */
Songs.update =(req, res)=>{};

/**
 * Borrar item
 */
Songs.destroy = async(req, res)=>{
    try{
        req = matchedData(req);
        const {id} = req;
        const dataFile = await storageModel.findById(id);
        await storageModel.findByIdAndDelete(id);
        //borrar archivo seleccionado
        const {filename} = dataFile;
        const filePath = `${MEDIA_URL}/${filename}`;
        fs.unlink(filePath);
        const data = {message: 'File deleted successfully'};
        res.send({data});
    }catch(e){
        httpError(res, 'Error delete destroy' );
    }
};

module.exports = Songs;