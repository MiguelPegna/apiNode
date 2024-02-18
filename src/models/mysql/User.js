const {mysqlCon} = require('../../config/mysqlCon');
const {DataTypes} = require('sequelize');

const User = mysqlCon.define('users', {
    name:{type:DataTypes.STRING, allowNull:false},
    lastname:{type:DataTypes.STRING, allowNull:false},
    email:{type:String, allowNull:false, unique:true},
    password:{type:String, allowNull:false},
    role:{type: DataTypes.ENUM(['user', 'admin'])}
},
    {
        timestamps:true
    }
);

module.exports = User;