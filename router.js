const express = require('express');
const router =  express.Router();
const conexion = require('./database/db');


//RUTA PARA EL INDEX
router.get('/', (req,res)=>{
    conexion.query('SELECT orden.id, orden.nombre, orden.descripcion, orden.fecha, orden.direccion,orden.fechaVencimiento, orden.precio, estadoorden.nombre AS estadoNombre, usuario.nombre AS usuarioNombre, razon.nombre AS razonNombre FROM orden INNER JOIN estadoorden ON orden.estadoorden_id_fk = estadoorden.id INNER JOIN usuario ON orden.usuario_id_fk = usuario.id INNER JOIN razon ON orden.razon_id_fk = razon.id WHERE estadoorden.id != 1 ORDER BY orden.fecha ASC;', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index', {results:results})
        }
    })
});




router.get('/login', (req,res)=>{
    res.render('login');
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

//RUTA PARA ADMIN

router.get('/admin', (req,res)=>{
    res.render('admin');
});











const crud = require('./controllers/crud');

router.post('/saveuser', crud.saveUser);
router.post('/login', crud.login);
router.post('/createCategoria', crud.createCategoria);
router.post('/editarCategoria', crud.editarCategoria);

//IMPORTAR DE CRUD

module.exports = router;