const Sequelize = require("sequelize")

const Playlist = (sequelize)=>{
    sequelize.define('playlist',{
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            allowIncrement: true
        },
        idPelicula:{
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        idMuseo:{
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0
        }
    })
}

module.exports = Playlist