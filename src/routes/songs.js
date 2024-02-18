const {Router} = require('express');
const {showRequest, storeRequest} = require('../request/songsRequest');
const {index, show, store, update, destroy} = require('../controllers/songsController');
const {authMiddleware} = require('../middleware/authMiddleware');
const { roleMiddleware } = require('../middleware/roleMiddleware');
const router = Router();

//generar las rutas de songs con los petodos GET POST PUT Y DELETE
//obtener registros
router.get('/songs', authMiddleware, index);

//obtener un registro
router.get('/songs/:id', authMiddleware, showRequest, show);

//add nuevo registro
router.post('/songs', authMiddleware, roleMiddleware(['admin']), storeRequest, store);

//actualizar registro
router.put('/songs/:id', authMiddleware, showRequest, storeRequest, update);

//eliminar registro
router.delete('/songs/:id', authMiddleware, showRequest, destroy);

module.exports = router;