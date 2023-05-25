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

//RUTA PARA VER PRODUCTO
router.get('/detalle/:id', (req,res)=>{
    const id = req.params.id;
    conexion.query('SELECT orden.id, orden.nombre, orden.descripcion, orden.fecha, orden.direccion,orden.fechaVencimiento, orden.precio, estadoorden.nombre AS estadoNombre, usuario.nombre AS usuarioNombre, razon.nombre AS razonNombre FROM orden INNER JOIN estadoorden ON orden.estadoorden_id_fk = estadoorden.id INNER JOIN usuario ON orden.usuario_id_fk = usuario.id INNER JOIN razon ON orden.razon_id_fk = razon.id WHERE estadoorden.id != 1  AND orden.id = ? ORDER BY orden.fecha ASC;',[id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('detalle', {orden:results[0]})
        }
    })
});
router.get('/detalle', (req,res)=>{
    res.render('detalle');
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

//RUTA PARA EDITAR CATEGORIA
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

//RUTA PARA VER USUARIOS
router.get('/usuario', (req,res)=>{
    conexion.query('SELECT * FROM usuario WHERE estadoUsuario_id_fk = 1', (error, results)=>{
        if(error){

        }else{
            res.render('usuario', {results:results})
        }
    })
})

//RUTA PARA NUEVO USUARIO
router.get('/nuevoUsuario',(req,res)=>{
    conexion.query('SELECT * FROM tipousuario where estadoTipoUsuario_id_fk = 1',(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('nuevoUsuario', {results:results});
        }
    })
})

//RUTA PARA VER TIPOS DE USUARIOS
router.get('/tipoUsuario', (req,res)=>{

    conexion.query('SELECT * FROM tipoUsuario where estadoTipoUsuario_id_fk = 1',(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('tipoUsuario', {results:results});
        }
    })
})

//RUTA PARA EDITAR USUARIO
router.get('/editarUsuario/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM usuario WHERE id = ?', [id], (error, result)=>{
        if(error){
            throw error;
        }else{
            conexion.query('SELECT * FROM tipousuario where estadoTipoUsuario_id_fk = 1', (error, tipox)=>{
                if(error){
                    throw error;
                }else{
                    res.render('editarUsuario',{results:result[0],tipox:tipox})
                }
            })
        }
    })
})
//RUTA PARA ELIMINAR USUARIO
router.get('/deleteUsuario/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('UPDATE usuario SET estadoUsuario_id_fk = 2 WHERE id = ? ', [id], (error)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/usuario')
        }
    })
})

//RUTA PARA LISTAR USUARIOS DESHABILITADOS

router.get('/UsuarioDes', (req,res)=>{

    conexion.query('SELECT * FROM usuario where estadoUsuario_id_fk = 2',(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('usuariosDes', {results:results});
        }
    })
})
//RUTA PARA HABILITAR USUSARIO

router.get('/HabilitarUsuario/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('UPDATE usuario SET estadoUsuario_id_fk = 1 WHERE id = ? ', [id], (error)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/usuario')
        }
    })
})

//RUTA PARA CREAR TIPO DE USUARIO

router.get('/nuevoTipoUsuario', (req,res)=>{
    res.render('nuevoTipoUsuario');
});

//RUTA PARA EDITAR TIPO DE USUARIO 

router.get('/editarTipoUsuario/:id', (req, res)=>{

    const id = req.params.id;
    conexion.query('SELECT * FROM tipoUsuario WHERE id = ?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('editarTipoUsuario', {tipo:results[0]});
        }
    })
})

//RUTA PARA LISTAR TU DESHABILITADAS

router.get('/tipoUsuarioDes', (req,res)=>{

    conexion.query('SELECT * FROM tipoUsuario WHERE estadoTipoUsuario_id_fk = 2;',(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('tipoUsuarioDes', {results:results});
        }
    })
})

//RUTA PARA ELIMINAR TIPO DE USUARIO
router.get('/deleteTipoUsuario/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('UPDATE tipousuario SET estadoTipoUsuario_id_fk = 2 WHERE id = ? ', [id], (error)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/tipoUsuario')
        }
    })
})

//RUTA PARA HABILITAR TIPO DE USUARIO
router.get('/habilitarTipoUsuario/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('UPDATE tipoUsuario SET estadoTipoUsuario_id_fk = 1 WHERE id = ? ', [id], (error)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/tipoUsuario')
        }
    })
})









const crud = require('./controllers/crud');

router.post('/saveuser', crud.saveUser);
router.post('/login', crud.login);
router.post('/createCategoria', crud.createCategoria);
router.post('/editarCategoria', crud.editarCategoria);
router.post('/createUsuario',crud.createUsuario);
router.post('/createTipoUsuario',crud.createTipoUsuario);
router.post('/editarTipoUsuario',crud.editarTipoUsuario);
router.post('/editarUsuario', crud.editarUsuario);

//IMPORTAR DE CRUD

module.exports = router;