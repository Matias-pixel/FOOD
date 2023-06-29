const express = require('express');
const router =  express.Router();
const conexion = require('./database/db');


//RUTA PARA EL INDEX
router.get('/', (req,res)=>{
    conexion.query('SELECT orden.id, orden.nombre, orden.descripcion, orden.image, orden.fecha, orden.direccion,orden.fechaVencimiento, orden.precio, estadoorden.nombre AS estadoNombre, usuario.nombre AS usuarioNombre, razon.nombre AS razonNombre FROM orden INNER JOIN estadoorden ON orden.estadoorden_id_fk = estadoorden.id INNER JOIN usuario ON orden.usuario_id_fk = usuario.id INNER JOIN razon ON orden.razon_id_fk = razon.id WHERE estadoorden.id != 1 ORDER BY orden.fecha ASC;', (error, results)=>{
        console.log('DESDE ROUTER /', req.session.user)
        if(error){
            throw error;
        }else{
            res.render('index', {results:results, user: req.session.user})
        }
    })
});

//RUTA PARA BUSCADOR
router.get('/indec',  (req, res)=>{

    const names = req.query.names;
    
    conexion.query('SELECT orden.id, orden.nombre, orden.descripcion,orden.image, orden.fecha, orden.direccion,orden.fechaVencimiento, orden.precio, estadoorden.nombre AS estadoNombre, usuario.nombre AS usuarioNombre, razon.nombre AS razonNombre FROM orden INNER JOIN estadoorden ON orden.estadoorden_id_fk = estadoorden.id INNER JOIN usuario ON orden.usuario_id_fk = usuario.id INNER JOIN razon ON orden.razon_id_fk = razon.id WHERE estadoorden.id != 1 AND orden.nombre = ? ORDER BY orden.fecha ASC;',[names], (error, results)=>{

        if (error){
            console.log(' NADADANDNANDANANDADNADNANDNA');
            throw error;            
        }else{
            res.render('index', {results: results});
            console.log('results :>> ', results);
        }
    });

    

})

//RUTA PARA CATEGORIAS

router.get('/in/:categoria', (req,res)=>{
    const categoria = req.params.categoria;

    conexion.query('SELECT orden.id, orden.nombre, orden.descripcion,orden.image, orden.fecha, orden.direccion,orden.fechaVencimiento, orden.precio, estadoorden.nombre AS estadoNombre, usuario.nombre AS usuarioNombre, razon.nombre AS razonNombre FROM orden INNER JOIN estadoorden ON orden.estadoorden_id_fk = estadoorden.id INNER JOIN usuario ON orden.usuario_id_fk = usuario.id INNER JOIN razon ON orden.razon_id_fk = razon.id WHERE estadoorden.id != 1 AND orden.categoria_id_fk = ? ORDER BY orden.fecha ASC;',[categoria], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index', {results:results, user: req.session.user});
            console.log('ACAAAAAAAAAAAAAAAA',req.session.user);
        }
    })

})




router.get('/login', (req,res)=>{
    
    res.render('login', {user: req.session.user});
});

//RUTA PARA VER PRODUCTO
router.get('/detalle/:id', (req,res)=>{
    const id = req.params.id;
    conexion.query('SELECT orden.id, orden.nombre, orden.descripcion, orden.image, orden.fecha, orden.direccion,orden.fechaVencimiento, orden.precio, estadoorden.nombre AS estadoNombre, usuario.nombre AS usuarioNombre, razon.nombre AS razonNombre FROM orden INNER JOIN estadoorden ON orden.estadoorden_id_fk = estadoorden.id INNER JOIN usuario ON orden.usuario_id_fk = usuario.id INNER JOIN razon ON orden.razon_id_fk = razon.id WHERE estadoorden.id != 1  AND orden.id = ? ORDER BY orden.fecha ASC;',[id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('detalle', {orden:results[0], user : req.session.user})
        }
    })
});
router.get('/detalle', (req,res)=>{
    res.render('detalle', {user: req.session.user});
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
            res.render('categorias', {results:results, user:req.session.user});
        }
    })
})

//RUTA PARA INGRESAR CATEGORIA
router.get('/ingresarCategoria', (req,res)=>{
    res.render('nuevaCategoria', {user: req.session.user});
})

//RUTA PARA EDITAR CATEGORIA
router.get('/editarCategoria/:id', (req, res)=>{

    const id = req.params.id;
    conexion.query('SELECT * FROM categoria WHERE id = ?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('editarCategoria', {tipo:results[0],user: req.session.user});
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
            res.redirect('/categoria',{user: req.session.user})
        }
    })
})

//RUTA PARA LISTAR CATEGORIAS DESHABILITADAS

router.get('/categoriaDes', (req,res)=>{

    conexion.query('SELECT * FROM categoria WHERE estadoCategoria_id_fk = 2;',(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('categoriasDes', {results:results, user: req.session.user});
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
            res.redirect('/categoria', {user: req.session.user})
        }
    })
})

//RUTA PARA VER USUARIOS
router.get('/usuario', (req,res)=>{
    conexion.query('SELECT usuario.id, usuario.nombre, usuario.apellido, usuario.correo, usuario.pass, tipousuario.nombre as tipoNombre, estadousuario.nombre as estadoNombre FROM usuario INNER JOIN estadousuario ON estadousuario.id = usuario.estadoUsuario_id_fk INNER JOIN tipousuario ON tipousuario.id = usuario.tipoUsuario_id_fk WHERE usuario.estadoUsuario_id_fk !=2 AND tipoUsuario_id_fk != 1 ORDER BY usuario.id ASC', (error, results)=>{
        if(error){

        }else{
            res.render('usuario', {results:results, user: req.session.user})
        }
    })
})

//RUTA PARA NUEVO USUARIO
router.get('/nuevoUsuario',(req,res)=>{
    conexion.query('SELECT * FROM tipousuario where estadoTipoUsuario_id_fk = 1',(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('nuevoUsuario', {results:results, user: req.session.user});
        }
    })
})

//RUTA PARA VER TIPOS DE USUARIOS
router.get('/tipoUsuario', (req,res)=>{

    conexion.query('SELECT * FROM tipoUsuario where estadoTipoUsuario_id_fk = 1',(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('tipoUsuario', {results:results, user: req.session.user});
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
                    res.render('editarUsuario',{results:result[0],tipox:tipox, user: req.session.user})
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
            res.redirect('/usuario',{user: req.session.user})
        }
    })
})

//RUTA PARA LISTAR USUARIOS DESHABILITADOS

router.get('/UsuarioDes', (req,res)=>{

    conexion.query('SELECT * FROM usuario where estadoUsuario_id_fk = 2',(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('usuariosDes', {results:results,user: req.session.user});
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
            res.redirect('/usuario',{user: req.session.user})
        }
    })
})

//RUTA PARA CREAR TIPO DE USUARIO

router.get('/nuevoTipoUsuario', (req,res)=>{
    res.render('nuevoTipoUsuario', {user: req.session.user});
});

//RUTA PARA EDITAR TIPO DE USUARIO 

router.get('/editarTipoUsuario/:id', (req, res)=>{

    const id = req.params.id;
    conexion.query('SELECT * FROM tipoUsuario WHERE id = ?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('editarTipoUsuario', {tipo:results[0], user: req.session.user});
        }
    })
})

//RUTA PARA LISTAR TU DESHABILITADAS

router.get('/tipoUsuarioDes', (req,res)=>{

    conexion.query('SELECT * FROM tipoUsuario WHERE estadoTipoUsuario_id_fk = 2;',(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('tipoUsuarioDes', {results:results, user: req.session.user});
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
            res.redirect('/tipoUsuario', {user: req.session.user})
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
            res.redirect('/tipoUsuario',{user: req.session.user})
        }
    })
})



//RUTA PARA SUBIR ORDEN EN CRUDO

router.get('/ordenFull', (req, res)=>{
    
    conexion.query('SELECT * FROM categoria WHERE estadoCategoria_id_fk = 1', (error, results) => {

        if (error){
            throw error;            
        }else{
            res.render('ordenp', {results: results, user: req.session.user});
        }
    });
        
    
})


//RUTA PARA LOG OUT

router.get('/adios',  (req, res)=>{

    req.session.destroy((error) => {
        if (error) {
          console.log(error);
        } else {
          res.redirect('/'); // Redirige a la página de inicio de sesión u otra página adecuada
        }
    });


})

//RUTA PARA DENEGAR ACCESO
router.get('/denegado',  (req, res)=>{

    res.render('denegado');

})

//RUTA PARA SUBIR ORDEN
router.get('/subirOrden', (req, res)=>{
    conexion.query('SELECT * FROM RAZON', (error, razon)=>{
        conexion.query('SELECT * FROM categoria WHERE estadoCategoria_id_fk = 1', (error, categoria)=>{
            if(error){
                throw error;
            }else{
                res.render('subirOrden', {categoria:categoria,razon:razon,user: req.session.user});
            }
        })
    })
    
    
})

//RUTA PARA VER MIS ORDENES

router.get('/misOrdenes', (req, res)=>{
    const id_usuario = req.session.user.id;

    console.log('ACAAAAAAAAAAAAA id usuario: ',req.session.user.id);
    conexion.query('SELECT orden.id, orden.categoria_id_fk, orden.razon_id_fk, orden.nombre, orden.descripcion, orden.image, orden.fecha, orden.fechaVencimiento, orden.direccion, orden.precio, categoria.nombre as nombreCategoria, estadoorden.nombre as nombreEstado FROM orden INNER JOIN categoria ON categoria.id = orden.categoria_id_fk INNER JOIN estadoorden ON estadoorden.id = orden.estadoorden_id_fk WHERE orden.usuario_id_fk = ?;',[id_usuario], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('misOrdenes', { results: results, user:req.session.user})
        }
    })
})

//RUTA PARA EDITAR ORDEN

router.get('/editarOrden/:numero', (req,res)=>{
    const id = req.params.numero;
    conexion.query('SELECT * FROM razon',(error, razon)=>{
        conexion.query('SELECT * FROM categoria',(error, categoria)=>{
            conexion.query('SELECT * FROM orden WHERE id = ? and estadoorden_id_fk != 1',[id], (error, results)=>{
                if(error){
                    throw error;
                }else{
                    res.render('editarOrden', {results:results[0],categoria:categoria,razon:razon, user: req.session.user})
                }
            })
        })
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
router.post('/saveOrden',crud.saveOrden);
router.post('/editOrden',crud.editOrden);

//IMPORTAR DE CRUD

module.exports = router;