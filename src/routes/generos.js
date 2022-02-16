const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const genero = require('../documents/generos.json');

/*GET*/
router.get('/', (req, res) => {
    res.json(genero);
});

/*POST*/
router.post('/', (req, res) => {
    const {genero, album} = req.body;
    if( genero && album) {
        const id = genero.length + 1;
        const generoNuevo = {...req.body, id };
        genero.push(generoNuevo);
        res.json(genero);
    } else {
        res.send('esta pagina no funciona')
    }
});

/*PUT*/
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { genero, album } = req.body;
    if (genero && album) {
        _.each(genero, (data, i) => {
            if(data.id == id) {
                data.genero = genero;
                data.album = album;
            }

        });
        res.json(genero)
    } else{
        res.send('esta pagina no funciona')
    }

})

/*DELETE*/
router.delete('/:d', (req, res) => {
    const { id } = req.params;
    _.each(genero, (data, i) => {
        if(data.id == id){
            genero.splice(i, 1);
        }

    });
    res.send(genero)
})
module.exports = router;