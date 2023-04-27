const express = require('express');
const router =  express.Router();
const conexion = require('./database/db');


//RUTA PARA EL INDEX
router.get('/', (req,res)=>{
    res.render('login');
});

router.get('/login', (req,res)=>{
    res.render('login');
});

//RUTA PARA INDEX

router.get('/index', (req,res)=>{
    res.render('index');
});


//RUTA PARA EL LOGIN


//RUTA PARA REGISTRO
router.get('/registro', (req, res)=>{
    res.render('registro')
})







const crud = require('./controllers/crud');

router.post('/saveuser', crud.saveUser);
router.post('/login', crud.login);

//IMPORTAR DE CRUD

module.exports = router;