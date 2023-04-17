const express = require('express');
const app = express();

//INVOCAR AL MOTOR DE PLANTILLA EJS//
app.set('view engine', 'ejs');


app.listen(5000, ()=>{
    console.log('Conectado alo');
});

//npx nodemon hhtpster -p 3000 -d ./public//