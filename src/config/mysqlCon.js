const {Sequelize} = require('sequelize');
const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

const DB_Mysql = {}

DB_Mysql.mysqlCon = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: 'mysql',
});

module.exports = DB_Mysql;

/*const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS,
    {
        host: DB_HOST,
        dialect: 'mysql',
    }
);

DB_Mysql.mysqlCon = async () => {
    try{
        await sequelize.authenticate();
        console.log('Conectado con la DB en MYSQL');
    }catch(e){
        console.log('Error de conexion con la DB en MYSQL');
    }
}

module.exports = DB_Mysql, sequelize;
*/