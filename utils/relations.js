function applyRelationship(sequelize) {
    //imprimir los modelos adheridos al objeto de con
    console.log(sequelize.models)
    const Museo = sequelize.models.museo
    const Pelicula = sequelize.models.pelicula
    const Playlist = sequelize.models.playlist

    //Un videojuego puede jugarse en una o muchas consolas
    Museo.belongsToMany(Pelicula,{through:Playlist}) //Crea una tabla intermedia y genera la llave foranea dentro de ella
    //Una consola tiene uno o muchos videojuegos
    Pelicula.belongsToMany(Museo,{through:Playlist}) //Crea una tabla intermedia y genera la llave foranea dentro de ella

    //Si tuvieras una relacion uno a muchos
    /*Supuesto obtener una tabla trofeo 
    un videojuego puede tener muchos trofeos
    PERO un trofeo solo pertenece a un videojuego*/

    /* uno a muchos
    Videojuego.hasMany(Trofeo)
    */

    /* muchos a uno
    Trofeo.belongsToMany(Videojuego)
    */
}


module.exports = {applyRelationship}