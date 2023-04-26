const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'food'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error al conectar a la bd es: '+error);
        return
    }
    console.log('Todo correcto! Conectado a la base de datos: Food');
})

module.exports = conexion;