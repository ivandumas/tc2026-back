const Sequelize = require("sequelize")

const Pelicula = (sequelize)=>{
    sequelize.define('pelicula',{
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            allowIncrement: true
        },
        nombre:{
            type: Sequelize.STRING(50),
            allowNull:false
        },
        director:{
            type: Sequelize.STRING(50)
        },
        anio:{
            type: Sequelize.INTEGER
        },
        duracion:{
            type: Sequelize.STRING(6)
        },
        clasificacion:{
            type: Sequelize.STRING(6)
        }
    })
}

module.exports = Pelicula