const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const pController = require('../controllers/peliculas')

//Servicio para procesar los datos del formulario
router.post('/agregarPelicula',pController.postAgregarPelicula)

//Consulta de Peliculas
router.get('/obtenerPeliculas',pController.getObtenerPeliculas)

//Eliminar Pelicula
router.post('borrarPelicula', pController.postBorrarPelicula)

//Actualizar Pelicula
router.post('acualizarPelicula', pController.postActualizarPelicula)

module.exports = router