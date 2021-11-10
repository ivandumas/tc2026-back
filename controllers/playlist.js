const path = require('path')
const Playlist = require('../utils/database').models.playlist

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
