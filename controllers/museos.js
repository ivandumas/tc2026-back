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

exports.getObtenerMuseos = (req, res) => {
    Museo.findAll()
        .then((museos) => {
            console.log(museos)
            res.json({status: 200, museos})
        })
        .catch((err) => {
            console.log(err)
            res.json({status: 500, estado: 'error' })
        })
}

exports.postBorrarMuseo = (req, res) => {
    console.log(req.body)
    Museo.destroy({
        where: {
            id: req.body.id,
        },
    })
        .then(() => {
            console.log('Museo eliminado'),
                res.json({ estado: 'aceptado' })
        })
        .catch((err) => {
            console.log(err)
            res.json({ estado: 'error' })
        })
}

exports.postActualizarMuseo = (req, res) => {
    console.log(req.body)
    Museo.update(
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
            console.log('Museo actualizado')
            res.json({ estado: 'aceptado' })
        })
        .catch((err) => {
            console.log(err)
            res.json({ estado: 'error' })
        })
}
