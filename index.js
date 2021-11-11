//Importando la biblioteca para realizar aplicaciones web
const express = require("express")
const path = require("path")
//const bodyParser = require("body-parser")
const mRoutes = require('./routes/museos')
const pRoutes = require('./routes/peliculas')
const plRoutes = require('./routes/playlist')
const sequelize = require('./utils/database')
//Creación de la aplicación web
const app = express();

//Middleware
app.use(express.static(path.join(__dirname,'public')))
//Configurar el servidor y que sepa que es un json
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/museos",mRoutes);
app.use("/peliculas",pRoutes);
app.use("/playlist",plRoutes)

//Que la aplicación escuche peticiones
sequelize.sync()
    .then(()=>{app.listen(8080,()=>{
        console.log("Aplicación web en línea en el puerto 8080")
    })})
    .catch()
