const path = require('path')
const Pelicula = require('../utils/database').models.pelicula

exports.postAgregarPelicula = (req, res) => {
    console.log(req.body)
    Pelicula.findOne({
        where: {
            nombre: req.body.nombre,
            ubicacion: req.body.ubicacion,
        },
    }).then((found) => {
        if (found === null) {
            if (req.body.nombre.value.length > 4 && req.body.nombre.value.length < 51) {
            Pelicula.create(req.body)
                .then((result) => {
                    console.log('Pelicula agregada exitosamente')
                    res.json({status: 200, estado: 'aceptado' })
                })
                .catch((err) => {
                    console.log(err)
                    res.json({status: 200, estado: 'error' })
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

exports.getObtenerPeliculas = (req, res) => {
    Pelicula.findAll()
        .then((peliculas) => {
            console.log(peliculas)
            res.json({status: 200, peliculas})
        })
        .catch((err) => {
            console.log(err)
            res.json({status: 500, estado: 'error' })
        })
}

exports.postBorrarPelicula = (req, res) => {
    console.log(req.body)
    Pelicula.destroy({
        where: {
            id: req.body.id,
        },
    })
        .then(() => {
            console.log('Pelicula eliminada'),
                res.json({ estado: 'aceptado' })
        })
        .catch((err) => {
            console.log(err)
            res.json({status: 500, estado: 'error' })
        })
}

exports.postActualizarPelicula = (req, res) => {
    console.log(req.body)
    Pelicula.update(
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
            console.log('Pelicula actualizada')
            res.json({ estado: 'aceptado' })
        })
        .catch((err) => {
            console.log(err)
            res.json({ estado: 'error' })
        })
}
