const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String, required:true, unique:true, lowercase: true},
    password:{type:String, required:true, select:false},
    role:{type:['user', 'admin'], default:'user'}
},
{
    timestamps: true,
    versionKey: false
});

UserSchema.plugin(mongooseDelete, {overrideMethods: 'all'});
module.exports = mongoose.model('users', UserSchema);
