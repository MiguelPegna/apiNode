const header = (req, res, next) => {
    try{
        const apiKey = req.headers.api_key;
        next();
        if(apiKey === 'val_ApiKey'){
            next();
        }
        else{
            res.status(403);
            res.send({error: 'Api_KEY invalido'});
        }
    }catch(e){
        res.status(502);
        res.send({error: 'Todo lo que pudo salir mal, malio sal'});
    }
}