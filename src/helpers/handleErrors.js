//MANEJADOR DE ERRORES
const ErrorsHttp = {};
ErrorsHttp.httpError = (res, message ='Special Fail', code=403) => {
    res.status(code);
    res.send({error: message});
}

module.exports = ErrorsHttp;