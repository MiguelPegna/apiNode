const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const { Schema } = mongoose;

const SongSchema = new mongoose.Schema({
    name:{type:String},
    album:{type:String},
    cover:{type:String,
        validate:{
            validator: (req)=>{
                return true;
            }, 
            message: 'ERROR_URL',
        },
    },
    artist:{
        name:{type:String},
        nickname:{type:String},
        nacionality: {type:String},
    },
    duration:{
        start:{type:Number},
        end:{type:Number}
    },
    mediaId:{type: mongoose.Types.ObjectId,}
},
{
    timestamps: true,
    versionKey: false
});

//relation with Storage
//findAllData is method custom
SongSchema.statics.findAllData = function(name){
    const joinData =this.aggregate([
        {
            $lookup:{
                from: 'storages',       //select table
                localField: 'mediaId',  //select field that is FK
                foreignField: '_id',    //select PK that is FK
                as: 'auto'              //alias    
            }
        },
        {
           $unwind: '$audio'
        }
    ]);
    return joinData;
}

//findAllData is method custom
SongSchema.statics.findOneData = function(id){
    const joinData =this.aggregate([
        {
            $match: {
                _id: mongoose.Types.ObjectId(id)
            }
        },
        {
            $lookup:{
                from: 'storages',       //select table
                localField: 'mediaId',  //select field that is FK
                foreignField: '_id',    //select PK that is FK
                as: 'auto'              //alias    
            }
        },
        {
           $unwind: '$audio'
        }
    ]);
    return joinData;
}


SongSchema.plugin(mongooseDelete, {overrideMethods: 'all'});
module.exports = mongoose.model('songs', SongSchema);