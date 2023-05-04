const express = require('express');
const router =  express.Router();
const conexion = require('./database/db');


//RUTA PARA EL INDEX
router.get('/', (req,res)=>{
    res.render('index');
});

router.get('/login', (req,res)=>{
    res.render('login');
});

//RUTA PARA INDEX

router.get('/index', (req,res)=>{
    res.render('index');
});




//RUTA PARA REGISTRO
router.get('/registro', (req, res)=>{
    res.render('registro')
})

//RUTA PARA LISTA DE USUARIOS

router.get('/usuarios', (req, res)=>{
    res.render('usuarios')
})

//RUTA PARA CATEGORIAS

router.get('/categoria', (req,res)=>{

    conexion.query('SELECT * FROM categoria WHERE estadoCategoria_id_fk = 1;',(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('categorias', {results:results});
        }
    })
})

//RUTA PARA INGRESAR CATEGORIA
router.get('/ingresarCategoria', (req,res)=>{
    res.render('nuevaCategoria');
})

//RUTA PARA EDITAR TIPO DE USUARIO
router.get('/editarCategoria/:id', (req, res)=>{

    const id = req.params.id;
    conexion.query('SELECT * FROM categoria WHERE id = ?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('editarCategoria', {tipo:results[0]});
        }
    })
})

//RUTA PARA DESHABILITAR CATEGORIA
router.get('/deshabilitarCategoria/:id', (req, res)=>{

    const id = req.params.id;
    conexion.query('UPDATE categoria SET estadoCategoria_id_fk = 2 WHERE id = ? ', [id], (error)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/categoria')
        }
    })
})

//RUTA PARA LISTAR CATEGORIAS DESHABILITADAS

router.get('/categoriaDes', (req,res)=>{

    conexion.query('SELECT * FROM categoria WHERE estadoCategoria_id_fk = 2;',(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('categoriasDes', {results:results});
        }
    })
})

//RUTA PARA HABILITAR CATEGORIA
router.get('/habilitarCategoria/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('UPDATE categoria SET estadoCategoria_id_fk = 1 WHERE id = ? ', [id], (error)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/categoria')
        }
    })
})











const crud = require('./controllers/crud');

router.post('/saveuser', crud.saveUser);
router.post('/login', crud.login);
router.post('/createCategoria', crud.createCategoria);
router.post('/editarCategoria', crud.editarCategoria);

//IMPORTAR DE CRUD

module.exports = router;