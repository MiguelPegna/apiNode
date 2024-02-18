//rutas de autorizacion
const {Router} = require('express');
const {registerRequest, loginRequest} = require('../request/authRequest');
const {register, login, logout} = require('../controllers/authController');
const router = Router();

//register user
router.post('/auth/register', registerRequest, register);

//login user
router.post('/auth/login', loginRequest, login);

//logout
router.post('/auth/logout', logout);


module.exports = router;