const express = require('express');
const router =  express.Router();
const conexion = require('./database/db');


//RUTA PARA EL INDEX
router.get('/', (req,res)=>{
    res.send('HOLAA');
});



//RUTA PARA EL LOGIN

router.get('/login', (req, res)=>{
    res.render('login')
})

//RUTA PARA REGISTRO
router.get('/registro', (req, res)=>{
    res.render('registro')
})







const crud = require('./controllers/crud');

//IMPORTAR DE CRUD

module.exports = router;