const {mysqlCon} = require('../../config/mysqlCon');
const { DataTypes } = require("sequelize");
const {Storage} = require("./Storage");

const Song = mysqlCon.define('songs', {
    name: {type: DataTypes.STRING, allowNull: false},
    album: {type: DataTypes.STRING,},
    cover: {type: DataTypes.STRING,},
    artist_name: {type: DataTypes.STRING,},
    artist_nickname: {type: DataTypes.STRING,},
    artist_nationality: {type: DataTypes.STRING,},
    duration_start: {type: DataTypes.INTEGER},
    duration_end: {type: DataTypes.INTEGER},
    mediaId: {type: DataTypes.STRING,}
},
    {
        timestamps:true
    }
);

Song.findAllData = function(){
    Song.belongsTo(Storage, {
        foreignKey: 'mediaId',
        as: 'audio'
    });
    return Song.findAll({include:'audio'});
}

Song.findOneData = function(id){
    Song.belongsTo(Storage, {
        foreignKey: 'mediaId',
        as: 'audio'
    });
    return Song.findOne({where:{id}, include:'audio'});
}
module.exports = Song;