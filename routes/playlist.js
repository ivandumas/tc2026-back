const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const plController = require('../controllers/playlist')

//Consulta de Playlist
router.get('/',plController.getObtenerPlaylist)

module.exports = router