const {applyRelationship} = require('./relations')
const Sequelize=require('sequelize')
//Generar conexion param1=nombreBD, param2=usuario param3=password
const sequelize= new Sequelize('equipoDinamita','user1','root',{
    dialect: 'mysql',
    host: '54.234.54.143',
    define: {
        //No coloques ni el createdAt y el updatedAt
        timestamps: false,
        //Evitar plural
        freezeTableName: true
    }
})

//Cargar todos los modelos
const modelDefiners = [
    //importar cada modelo dentro de la carpeta models
    require('../models/museos'),
    require('../models/peliculas'),
    require('../models/playlist')
]

//Adherir al obj de conexion (sequelize)
for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}


//Realizar las relaciones entre las tablas de la base de datos
applyRelationship(sequelize)


//Para poder usar en archivos externos la conexion
module.exports = sequelize;