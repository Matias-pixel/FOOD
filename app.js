
const express = require('express');
const { json } = require('express');
const path = require('path');
const multer = require ('multer');
const { v4: uuidv4 } = require('uuid');
const session = require('express-session');

const app = express();

const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename: function (req, file, cb) {
        cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
    }
});


app.use(express.urlencoded({extended:false}));
app.use(express(json));

//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//MIDDLEWARES
app.use(multer({
    storage,
    dest: path.join(__dirname, 'public/uploads')
}).single('image'));

//SESIONES
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}));

//Permitir ver imagenes señores
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'sass')));

app.use('/', require('./router'));

app.listen(5000, ()=>{
    console.log('Conectado alo');
});
