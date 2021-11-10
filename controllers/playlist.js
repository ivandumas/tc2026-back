const path = require('path')
const Playlist = require('../utils/database').models.playlist

exports.postAgregarPlaylist = (req, res) => {
    console.log(req.body)
    Playlist.findOne({
        where: {
            nombre: req.body.nombre,
        },
    }).then((found) => {
        if (found === null) {
            if (req.body.nombre.value.length > 4 && req.body.nombre.value.length < 51) {
            Playlist.create(req.body)
                .then((result) => {
                    console.log('Playlist agregada exitosamente')
                    res.json({status: 200, estado: 'aceptado' })
                })
                .catch((err) => {
                    console.log(err)
                    res.json({ estado: 'error' })
                })
            } else {
                console.log('Title must be between 5 and 50 characters')
                res.json({status: 422, codigo: "InvalidBodyException"})
            }
        } else {
            console.log('El registro de esta película ya existe')
            res.json({ estado: 'ya existe' })
        }
    })
}

exports.getObtenerPlaylists = (req, res) => {
    Playlist.findAll()
        .then((playlists) => {
            console.log(playlists)
            res.json({status: 200, playlists})
        })
        .catch((err) => {
            console.log(err)
            res.json({status: 500, estado: 'error' })
        })
}

exports.postBorrarPlaylist = (req, res) => {
    console.log(req.body)
    Playlist.destroy({
        where: {
            id: req.body.id,
        },
    })
        .then(() => {
            console.log('Playlist eliminada'),
                res.json({ estado: 'aceptado' })
        })
        .catch((err) => {
            console.log(err)
            res.json({ estado: 'error' })
        })
}

exports.postActualizarPlaylist = (req, res) => {
    console.log(req.body)
    Playlist.update(
        {
            nombre: req.body.nombre,
        },
        {
            where: {
                id: req.body.id,
            },
        }
    )
        .then(() => {
            console.log('Playlist actualizada')
            res.json({ estado: 'aceptado' })
        })
        .catch((err) => {
            console.log(err)
            res.json({ estado: 'error' })
        })
}
