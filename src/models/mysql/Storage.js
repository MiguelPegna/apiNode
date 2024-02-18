const {mysqlCon} = require('../../config/mysqlCon');
const { DataTypes } = require("sequelize");

const Storage = mysqlCon.define('storages', {
    url: {type: DataTypes.STRING, allowNull: false},
    filename: {type: DataTypes.STRING}
},
    {
        timestamps:true
    }
);

module.exports = Storage;