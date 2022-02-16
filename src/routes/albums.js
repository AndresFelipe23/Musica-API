const { Router } = require('express');
const router = Router();
const req = require( 'express/lib/request' );
const _ = require('underscore'); 

const albums = require('../documents/album.json');


/*GET*/
router.get('/', (req, res) => {
    res.json(albums);
});

/*POST*/
router.post('/', (req, res) => {
    const {cancion, cantante, publicacion} = req.body;
    if (cancion && cantante && publicacion) {
        const id = albums.length + 1;
        const albumsNuevo = {...req.body, id};
        albums.push(albumsNuevo);
        res.json(albums)
    } else {
        res.send('esta pagina no funciona')
    }
});

/*PUT*/
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {cancion, cantante, publicacion} = req.body;
    if (cancion && cantante && publicacion) {
        _.each(albums, (data, i) => {
            if(data.id == id) {
                data.cancion = cancion;
                data.cantante = cantante;
                data.publicacion = publicacion;
            }
        });
        res.json(albums)
    } else {
        res.send('esta pagina no funciona')
    }
})

/*DELETE*/
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(albums, (data, i) => {
        if(data.id == id){
            albums.splice(i, 1);
        }
    });
    res.send(albums)
})
module.exports = router;