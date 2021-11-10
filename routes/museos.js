const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const mController = require('../controllers/museos')

//Servicio para procesar los datos del formulario
router.post('/agregarMuseo',mController.postAgregarMuseo)

//Consulta de museos
router.get('/obtenerMuseos',mController.getObtenerMuseos)

//Eliminar museo
router.post('borrarMuseo', mController.postBorrarMuseo)

//Actualizar museo
router.post('acualizarMuseo', mController.postActualizarMuseo)

module.exports = router