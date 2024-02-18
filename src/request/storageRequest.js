const { check } = require('express-validator');
const validateRequest = require('../helpers/handleRequests');
const StorageRequest = {};

StorageRequest.showRequest = [
    check('id').exists().notEmpty(),

    (req, res, next) => {
        return validateRequest(req, res, next);
    }
];

module.exports = StorageRequest;