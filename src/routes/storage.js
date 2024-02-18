const {Router} = require('express');
const {index, show, store, update, destroy} = require('../controllers/storageController');
const uploadMiddleware = require('../helpers/handleStorage');
const {showRequest} = require('../request/storageRequest');
const router = Router();

//generar las rutas de songs con los petodos GET POST PUT Y DELETE
//obtener registros
router.get('/storage', index);

//obtener un registro
router.get('/storage/:id', showRequest, show);

//add nuevo registro
router.post('/storage', uploadMiddleware.single('docfile'), store);

//actualizar registro
router.put('/storage/:id', showRequest, update);

//eliminar registro
router.delete('/storage/:id', showRequest, destroy);

module.exports = router;