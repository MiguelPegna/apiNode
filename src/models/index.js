//switch the model that going to use according to DB ENGINE
const ENGINE_DB = process.env.ENGINE_DB;
const pathModels = (ENGINE_DB === 'nosql') ? 'nosql' : 'mysql';
const models ={
    songModel: require(`./${pathModels}/Song`),
    storageModel: require(`./${pathModels}/Storage`),
    usersModel: require(`./${pathModels}/User`)
}

module.exports = models;