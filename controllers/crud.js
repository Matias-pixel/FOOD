const conexion = require('../database/db');
const bcryptjs = require('bcryptjs');
const express = require('express');
const session = require('express-session');
const app = express();


//CREAR USUARIO
exports.saveUser = (req, res) => {
    const nombre = req.body.name;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const pass = req.body.password;
    const tipo_user = 3;
    conexion.query('INSERT INTO usuario SET ?', { nombre: nombre, apellido: apellido, correo: correo, pass: pass, tipoUsuario_id_fk: tipo_user, estadoUsuario_id_fk: 1 }, (error, results) => {
        if (error) {
            throw error;

        } else {
            res.render('registro', {
                alert: true,
                alertTitle: 'Resgistro',
                alertMessage: 'Registro exitoso!',
                alertIcon: 'success',
                showConfirmButton: false,
                timer: 1500,
                ruta: ''
            })
        }
    });
}

//LOGEARSE

exports.login = (req, res) => {
    const email = req.body.nombre;
    const pass = req.body.password;

    if (email && pass) {
        conexion.query(
            'SELECT * FROM usuario WHERE nombre = ? and pass = ? and estadoUsuario_id_fk = 1',
            [email, pass],
            (error, results) => {
                if (error) {
                    console.log('error :>> ', error);
                } else {
                    if (results.length > 0) {
                        if (results[0].tipoUsuario_id_fk === 1) {

                            res.render('login', {
                                alert: true,
                                alertTitle: 'Conexion exitosa',
                                alertMessage: 'Bienvenido! ',
                                alertIcon: 'success',
                                showConfirmButton: false,
                                timer: 1500,
                                ruta: 'categoria',
                                user: (req.session.user = results[0])
                            });
                            console.log('EN EL CRUD', req.session.user);
                        } else if (results[0].tipoUsuario_id_fk === 2) {
                            console.log('ENTRO AL usuario 2222222222222')
                            res.render('login', {
                                alert: true,
                                alertTitle: 'Conexion exitosa',
                                alertMessage: 'Bienvenido! ',
                                alertIcon: 'success',
                                showConfirmButton: false,
                                timer: 1500,
                                ruta: '',
                                user: (req.session.user = results[0])
                            });
                        } else if (results[0].tipoUsuario_id_fk === 3) {
                            console.log('ENTRO AL usuario 333333')
                            res.render('login', {
                                alert: true,
                                alertTitle: 'Conexion exitosa',
                                alertMessage: 'Bienvenido! ',
                                alertIcon: 'success',
                                showConfirmButton: false,
                                timer: 1500,
                                ruta: '',
                                user: (req.session.user = results[0])
                            });
                        }
                    } else {
                        console.log('ENTRO AL ELSEEEEEEEEEEEEEEEE')
                        res.render('login', {
                            alert: true,
                            alertTitle: 'Error',
                            alertMessage: 'Nombre o contraseña incorrectos!',
                            alertIcon: 'error',
                            showConfirmButton: true,
                            timer: false,
                            ruta: '',
                        });
                    }
                }
            }
        );
    }
};



//CREAR NUEVA CATEGORIA
exports.createCategoria = (req, res) => {
    const nombre = req.body.nombre;
    const fk = 1;

    conexion.query('INSERT INTO categoria SET ?', { nombre: nombre, estadoCategoria_id_fk: fk }, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.render('nuevaCategoria', {
                alert: true,
                alertTitle: 'Todo correcto',
                alertMessage: 'Categoria ingresada correctamente!',
                alertIcon: 'succes',
                showConfirmButton: false,
                timer: 1500,
                ruta: 'categoria'
            })
        }
    })
}


//EDITAR TIPO DE CATEGORIA
exports.editarCategoria = (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    conexion.query('SELECT * FROM categoria WHERE estadoCategoria_id_fk = 1', (error, results2) => {
        if (error) {
            throw error;
        } else {
            conexion.query('UPDATE categoria SET ? WHERE id = ?', [{ nombre: nombre }, id], (error, results) => {
                if (error) {
                    throw error;
                }
                else {
                    res.render('editarCategoria', {
                        alert: true,
                        alertTitle: 'Todo correcto',
                        alertMessage: 'Categoria actualizada correctamente!',
                        alertIcon: 'succes',
                        showConfirmButton: false,
                        timer: 1500,
                        ruta: 'categoria',
                        tipo: results,
                        results2: results2

                    })
                }
            })
        }
    })

}

exports.createUsuario = (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.email;
    const pass = req.body.pass;
    const tipo = req.body.tipo;
    conexion.query('SELECT * FROM tipousuario WHERE estadoTipoUsuario_id_fk = 1;', (error, results) => {
        if (error) {
            throw error;
        } else {
            conexion.query('INSERT INTO usuario SET ?', { nombre: nombre, apellido: apellido, correo: correo, pass: pass, tipoUsuario_id_fk: tipo, estadoUsuario_id_fk: 1 }, (error, results2) => {
                if (error) {
                    throw error;
                } else {
                    res.render('nuevoUsuario', {
                        alert: true,
                        alertTitle: 'Resgistro',
                        alertMessage: 'Registro exitoso!',
                        alertIcon: 'success',
                        showConfirmButton: false,
                        timer: 1500,
                        ruta: 'usuario',
                        results: results,
                        results2: results
                    })
                }
            });
        }

    });

}

exports.editarUsuario = (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.email;
    const pass = req.body.pass;
    const tipo = req.body.tipo;
    conexion.query('SELECT * FROM tipousuario WHERE estadoTipoUsuario_id_fk = 1;', (error, tipox) => {
        if (error) {
            throw error;
        } else {
            conexion.query('UPDATE usuario SET ? WHERE id = ?', [{ nombre: nombre, apellido: apellido, correo: correo, pass: pass, tipoUsuario_id_fk: tipo, estadoUsuario_id_fk: 1 }, id], (error, results) => {
                if (error) {
                    throw error;
                } else {
                    res.render('editarUsuario', {
                        alert: true,
                        alertTitle: 'Actualizacion compleada',
                        alertMessage: 'El usuario ha sido actualizado con exito!',
                        alertIcon: 'success',
                        showConfirmButton: false,
                        timer: 1500,
                        ruta: 'usuario',
                        tipox: tipox,
                        results: results

                    })
                }
            });
        }

    });

}

exports.createTipoUsuario = (req, res) => {
    const nombre = req.body.nombre;
    const fk = 1;

    conexion.query('INSERT INTO tipoUsuario SET ?', { nombre: nombre, estadoTipoUsuario_id_fk: fk }, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.render('nuevaCategoria', {
                alert: true,
                alertTitle: 'Todo correcto',
                alertMessage: 'Tipo de usuario creado correctamente!',
                alertIcon: 'succes',
                showConfirmButton: false,
                timer: 1500,
                ruta: 'tipoUsuario',
                results: results
            })
        }
    })
}


exports.editarTipoUsuario = (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    conexion.query('SELECT * FROM tipoUsuario WHERE estadoTipoUsuario_id_fk = 1', (error, results2) => {
        if (error) {
            throw error;
        } else {
            conexion.query('UPDATE tipoUsuario SET ? WHERE id = ?', [{ nombre: nombre }, id], (error, results) => {
                if (error) {
                    throw error;
                }
                else {
                    res.render('editarTipoUsuario', {
                        alert: true,
                        alertTitle: 'Todo correcto',
                        alertMessage: 'Tipo de usuario actualizado correctamente!',
                        alertIcon: 'succes',
                        showConfirmButton: false,
                        timer: 1500,
                        ruta: 'tipoUsuario',
                        tipo: results,
                        results2: results2

                    })
                }
            })
        }
    })

}

exports.saveOrden = (req, res) => {
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const imagen = req.file.filename;
    const fecha = new Date();
    const fechaV = req.body.fechV;
    const direccion = req.body.direccion;
    const precio = req.body.precio;
    const cate = req.body.categoria;
    const estado = 2;

    const usuario = req.session.user.id;

    const raz = req.body.razon;

    conexion.query('SELECT * FROM categoria WHERE estadoCategoria_id_fk = 1', (error, categoria)=>{
        conexion.query('SELECT * FROM razon', (error, razon)=>{
            conexion.query('INSERT INTO orden SET ?', { nombre: nombre, descripcion: descripcion, image: imagen, fecha: fecha, fechaVencimiento: fechaV, direccion: direccion, precio: precio, categoria_id_fk: cate, estadoorden_id_fk: estado, usuario_id_fk: usuario, razon_id_fk: raz }, (error, results) => {
                if (error) {
                    console.log(error);
                } else {
                    res.render('subirOrden', {
                        alert: true,
                        alertTitle: 'Todo correcto',
                        alertMessage: 'Orden subida exitosamente!',
                        alertIcon: 'success',
                        showConfirmButton: false,
                        timer: 1500,
                        ruta: '/',
                        results: results,
                        categoria:categoria,
                        razon: razon,
                        user: (req.session.user)
                    })
                }
            });
        })
    })

    


}




