const { check } = require('express-validator');
const validateRequest = require('../helpers/handleRequests');
const AuthRequest = {};

AuthRequest.registerRequest = [
    check('name').exists().notEmpty().isLength({min:3, max:25}),
    check('lastname').exists().notEmpty().isLength({min:3, max:25}),
    check('email').exists().notEmpty().isEmail(),
    check('password').exists({checkFalsy:true}).notEmpty().isLength({min:4, max:12}),
    check('password_confirmation').exists({checkFalsy:true}).notEmpty().isLength({min:4, max:12}).custom((value, {req}) => value == req.body.password).withMessage('Passwords do not match'),

    (req, res, next) => {
        return validateRequest(req, res, next);
    }
];

AuthRequest.loginRequest = [
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty().isLength({min:4, max:12}),

    (req, res, next) => {
        return validateRequest(req, res, next);
    }
];

module.exports = AuthRequest;