const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const cantante = require('../documents/cantante.json');

/*GET*/
router.get('/', (req, res) => {
    res.json(cantante);
});

/*POST*/
router.post('/', (req, res) => {
    const { cancion, cantante } = req.body;
    if(cancion && cantante) {
        const id = cantante.lenth + 1;
        const cantanteNuevo = {...req.body, id};
        cantante.push(cantanteNuevo);
        res.json(cantante);
    } else{
        res.send('esta pagina no funciona')
    }
});

/*PUT*/
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {cancion, cantante} = req.body;
    if ( cancion && cantante) {
        _.each(cantante, (data, i)=> {
            if(data.id == id) {
                data.cancion = cancion;
                data.cantante = cantante;
            }
        });
        res.json(cantante)
    } else{
        res.send('esta pagina no funciona')
    }
})

/*DELETE*/
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(cantante, (data, i) => {
        if(data.id == id){
            cantante.splice(i, 1);
        }
    });
    res.send(cantante)
})
module.exports = router;