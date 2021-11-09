const path = require('path')
const Museo = require('../utils/database').models.museo

exports.postAgregarMuseo = (req, res) => {
    console.log(req.body)
    Museo.findOne({
        where: {
            nombre: req.body.nombre,
            ubicacion: req.body.ubicacion,
        },
    }).then((found) => {
        if (found === null) {
            if (req.body.descripcion.value.length > 9 && req.body.descripcion.value.length < 251) {
            Museo.create(req.body)
                .then((result) => {
                    console.log('Museo agregado exitosamente')
                    res.json({status: 200, estado: 'aceptado' })
                })
                .catch((err) => {
                    console.log(err)
                    res.json({ estado: 'error' })
                })
            } else {
                console.log('Description must be between 10 and 250 characters')
                res.json({status: 422, codigo: "InvalidBodyException"})
            }
        } else {
            console.log('El registro de este Museo ya existe')
            res.json({ estado: 'ya existe' })
        }
    })
}

exports.getObtenerVideojuegos = (req, res) => {
    Videojuego.findAll()
        .then((videojuegos) => {
            console.log(videojuegos)
            res.json({status: 200, videojuegos})
        })
        .catch((err) => {
            console.log(err)
            res.json({status: 500, estado: 'error' })
        })
}

exports.postBorrarVideojuego = (req, res) => {
    console.log(req.body)
    Videojuego.destroy({
        where: {
            id: req.body.id,
        },
    })
        .then(() => {
            console.log('Videojuego destruido'),
                res.json({ estado: 'aceptado' })
        })
        .catch((err) => {
            console.log(err)
            res.json({ estado: 'error' })
        })
}

exports.postActualizarVideojuego = (req, res) => {
    console.log(req.body)
    Videojuego.update(
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
            console.log('Videojuego actualizado')
            res.json({ estado: 'aceptado' })
        })
        .catch((err) => {
            console.log(err)
            res.json({ estado: 'error' })
        })
}
