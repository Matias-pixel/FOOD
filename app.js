//const express = require('express');
//const app = express();

//INVOCAR AL MOTOR DE PLANTILLA EJS//
//app.set('view engine', 'ejs');

//app.use(express.urlencoded({extended:false}));
//app.use(express(express.json));

//app.use('/',require('./router'));
const express = require('express');
const { json } = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express(json));

//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//Permitir ver imagenes señores
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'sass')));

app.use('/', require('./router'));

app.listen(5000, ()=>{
    console.log('Conectado alo');
});

