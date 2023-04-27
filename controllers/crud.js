const conexion = require('../database/db');
const bcryptjs = require('bcryptjs');

exports.saveUser = async(req, res)=>{
    const nombre = req.body.name;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const pass = req.body.password;
    const tipo_user = 3;

    let passwordHaash = await bcryptjs.hash(pass,8);



    conexion.query('INSERT INTO usuario SET ?', {nombre:nombre, apellido:apellido, correo:correo, pass:passwordHaash, tipoUsuario_id_fk:tipo_user}, async(error, results)=>{
        if(error){
            throw error;

        }else{
            res.render('registro',{
                alert:true,
                alertTitle: 'Resgistro',
                alertMessage: 'Registro exitoso!',
                alertIcon:'success',
                showConfirmButton: false,
                timer: 1500,
                ruta: ''
            })
        }
    });
}


exports.login = async(req,res)=>{
    const nombre = req.body.nombre;
    const pass = req.body.password;

    let passwordHaash = await bcryptjs.hash(pass,8);

    if(nombre && pass){
        conexion.query('SELECT * FROM usuario WHERE nombre = ?', [nombre], async(error, results)=>{

            if(results.length == 0 || !(await bcryptjs.compare(pass, results[0].pass))){
                res.render('login',{
                    alert:true,
                    alertTitle: 'Error',
                    alertMessage: 'Nombre o contraseña incorrectos!',
                    alertIcon:'error',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'login'
                })
            }else{
                res.render('login',{
                    alert:true,
                    alertTitle: 'Conexion exitosa',
                    alertMessage: 'Credenciales correctas!',
                    alertIcon:'succes',
                    showConfirmButton: false,
                    timer: 1500,
                    ruta: 'index'
                })
            }
        })
    }else{
        res.render('login',{
            alert:true,
            alertTitle: 'Error',
            alertMessage: 'Ingrese los campos!',
            alertIcon:'error',
            showConfirmButton: true,
            timer: false,
            ruta: 'login'
        })
    }

}