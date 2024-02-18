const mongoose = require('mongoose');	//se incluye en una constante la dependencia de mongoose

//guardamos en una constante la conexion a nuestra db
const dbConnectNoSql = () => {
    const URL_DB = process.env.DB_URI;
    mongoose.connect(URL_DB,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db=> console.log('Conexion con la DB NoSql'))
    .catch(err=>console.error(err));
}

module.exports = dbConnectNoSql;