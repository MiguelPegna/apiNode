const app = require('./server');
const {mysqlCon, confirm} = require('./config/mysqlCon');
const dbConnectNoSql = require('./config/mongo');


//server escuchando
app.listen(app.get('port'), ()=>{
    console.log('Servidor activo en puerto: http://localhost:',app.get('port'), 'biatch', );
});

//engine for DB
const ENGINE_DB = process.env.ENGINE_DB;
(ENGINE_DB === 'nosql') ? dbConnectNoSql() : mysqlCon;
if (ENGINE_DB === 'mysql') console.log('Conectado con DB en MYSQL');
