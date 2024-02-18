const { check } = require('express-validator');
const validateRequest = require('../helpers/handleRequests');
const SongsRequest = {};

SongsRequest.storeRequest = [
    check('name').exists().notEmpty(),
    check('album').exists().notEmpty(),
    check('cover').exists().notEmpty(),
    check('artist').exists().notEmpty(),
    check('artist.name').exists().notEmpty(),
    check('artist.nickname').exists().notEmpty(),
    check('artist.nationality').exists().notEmpty(),
    check('duration').exists().notEmpty(),
    check('duration.start').exists().notEmpty(),
    check('duration.end').exists().notEmpty(),
    //check('mediaId').exists().notEmpty().isMongoId(),

    (req, res, next) => {
        return validateRequest(req, res, next);
    }
];

SongsRequest.showRequest = [
    check('id').exists().notEmpty().isMongoId(),

    (req, res, next) => {
        return validateRequest(req, res, next);
    }
];

module.exports = SongsRequest;