const Sequelize = require("sequelize")

const Museo = (sequelize)=>{
    sequelize.define('museo',{
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
        ubicacion:{
            type: Sequelize.STRING(300)
        },
        descripcion:{
            type: Sequelize.STRING(1000)
        },
        costo: {
            tye: Sequelize.INTEGER
        }
    })
}

module.exports = Museo